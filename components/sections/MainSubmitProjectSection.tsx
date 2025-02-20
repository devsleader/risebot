'use client'
import React from 'react';
import Link from 'next/link';

interface UploadState {
  file1: File | null;
  file2: File | null;
  file3: File | null;
  file4: File | null;
}

interface FormData {
  network: string;
  identityType: 'national' | 'passport' | 'license' | null;
  nationalIdNumber: string;
  name: string;
  state: string;
  address: string;
  city: string;
  postCode: string;
  termsAccepted: boolean;
}

const MainSubmitProjectSection = () => {
  const [uploadState, setUploadState] = React.useState<UploadState>({
    file1: null,
    file2: null,
    file3: null,
    file4: null
  });

  const [formData, setFormData] = React.useState<FormData>({
    network: 'Vietnamese',
    identityType: null,
    nationalIdNumber: '',
    name: '',
    state: '',
    address: '',
    city: '',
    postCode: '',
    termsAccepted: false
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fileKey: keyof UploadState) => {
    if (event.target.files && event.target.files[0]) {
      setUploadState(prev => ({
        ...prev,
        [fileKey]: event.target.files![0]
      }));
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
    console.log('Upload State:', uploadState);
  };

  return (
    <div className='inner-page'>
      <section className="tf-section project-info pt60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={handleFormSubmit}>
                <div className="project-info-form check-radio">
                  <h4 className="title">Step 1: Identity confirmation</h4>
                  <div className="form-inner">
                    <fieldset>
                      <label>Choose network</label>
                      <dl id="sample" className="dropdown">
                        <dt>
                          <Link href="#" onClick={(e) => e.preventDefault()}>
                            <span>
                              <img
                                className="flag"
                                src="/assets/images/common/vietnam.png"
                                alt="Vietnamese flag"
                              />
                              Vietnamese
                            </span>
                          </Link>
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75 1.125L5 4.875L1.25 1.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </dt>
                        <dd>
                          <ul className="option">
                            <li>
                              <Link href="#" onClick={(e) => e.preventDefault()}>
                                <img
                                  className="flag"
                                  src="/assets/images/common/vietnam.png"
                                  alt="Vietnamese flag"
                                />
                                Vietnamese
                              </Link>
                            </li>
                            <li>
                              <Link href="#" onClick={(e) => e.preventDefault()}>
                                <img
                                  className="flag"
                                  src="/images/common/france.png"
                                  alt="French flag"
                                />
                                France
                              </Link>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </fieldset>

                    <fieldset>
                      <label className="mb9">Select identity type</label>
                      <p>Should be your government issued photo identity</p>
                      <ul className="list">
                        {[
                          { id: 'a-opt', value: 'national', label: 'National ID' },
                          { id: 'b-opt', value: 'passport', label: 'Passport' },
                          { id: 'c-opt', value: 'license', label: "Driver's license" }
                        ].map((option) => (
                          <li key={option.id} className="list__item">
                            <input
                              type="radio"
                              className="radio-btn"
                              name="choice"
                              id={option.id}
                              onChange={() => setFormData(prev => ({ ...prev, identityType: option.value as FormData['identityType'] }))}
                              checked={formData.identityType === option.value}
                            />
                            <label htmlFor={option.id} className="label">{option.label}</label>
                          </li>
                        ))}
                      </ul>
                    </fieldset>
                  </div>
                </div>

                <div className="project-info-form style">
                  <h6 className="title mb30">Step 2: Upload document</h6>
                  <div className="form-inner">
                    <div className="upload-img mb22">
                      {[
                        { id: 'file-1', key: 'file1' as keyof UploadState, label: 'National ID Front' },
                        { id: 'file-2', key: 'file2' as keyof UploadState, label: 'National ID Back' },
                        { id: 'file-3', key: 'file3' as keyof UploadState, label: 'Selfie with National ID' }
                      ].map((upload) => (
                        <div key={upload.id} className="col">
                          <div className="box">
                            <input
                              type="file"
                              name={`${upload.id}[]`}
                              id={upload.id}
                              className="inputfile inputfile-1"
                              onChange={(e) => handleFileChange(e, upload.key)}
                              accept="image/jpeg,image/png"
                            />
                            <label htmlFor={upload.id}>
                              <img
                                src="/assets/images/common/upload.png"
                                alt="Upload icon"
                              />
                              <span>Drag and drop<br />images</span>
                              <span className="file"></span>
                            </label>
                          </div>
                          <p>{upload.label}</p>
                        </div>
                      ))}
                    </div>
                    <fieldset className="mb21">
                      <label className="fz16 mb8" htmlFor="file-4">Or upload from a URL</label>
                      <fieldset className="block">
                        <div className="box">
                          <div className="upload-img style2">
                            <div className="col mobile-mb0">
                              <div className="box">
                                <input
                                  type="file"
                                  name="file-4[]"
                                  id="file-4"
                                  className="inputfile inputfile-1"
                                  data-multiple-caption="{count} files selected"
                                />
                                <label htmlFor="file-4">
                                  <span>Add the file URL</span>
                                  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3055 2.4375C9.81376 2.4375 6.94481 5.1088 6.63243 8.51863C6.5875 9.00913 6.17579 9.3825 5.68546 9.382C3.92025 9.3805 2.4375 10.8496 2.4375 12.6111C2.4375 14.3945 3.88325 15.8403 5.66666 15.8403H6.5C7.01776 15.8403 7.4375 16.26 7.4375 16.7778C7.4375 17.2955 7.01776 17.7153 6.5 17.7153H5.66666C2.84771 17.7153 0.5625 15.4301 0.5625 12.6111C0.5625 10.0805 2.45709 7.9655 4.87203 7.5725C5.60853 3.58349 9.10378 0.5625 13.3055 0.5625C16.4338 0.5625 19.1693 2.23737 20.6668 4.73581C24.253 4.59444 27.4375 7.52788 27.4375 11.2223C27.4375 14.5896 24.8748 17.3574 21.5926 17.6833C21.0774 17.7344 20.6183 17.3583 20.5671 16.843C20.5159 16.3278 20.8921 15.8686 21.4074 15.8174C23.74 15.5859 25.5625 13.6163 25.5625 11.2223C25.5625 8.45625 23.004 6.2614 20.2826 6.65113C19.8821 6.7085 19.4839 6.5055 19.2988 6.13691C18.1965 3.94114 15.9258 2.4375 13.3055 2.4375Z" fill="#798DA3"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 12.8258L16.462 15.2878C16.8281 15.6539 17.4217 15.6539 17.7879 15.2878C18.154 14.9216 18.154 14.3281 17.7879 13.962L15.1049 11.2789C14.4946 10.6688 13.5054 10.6688 12.8951 11.2789L10.2121 13.962C9.84597 14.3281 9.84597 14.9216 10.2121 15.2878C10.5782 15.6539 11.1718 15.6539 11.5379 15.2878L14 12.8258Z" fill="#798DA3"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 21.1875C14.5178 21.1875 14.9375 20.7677 14.9375 20.25V12.75C14.9375 12.2322 14.5178 11.8125 14 11.8125C13.4822 11.8125 13.0625 12.2322 13.0625 12.75V20.25C13.0625 20.7677 13.4822 21.1875 14 21.1875Z" fill="#798DA3"></path>
                                  </svg>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </fieldset>
                    <fieldset className="mb21">
                      <label className="fz16 mb8" htmlFor="national">
                        National ID number
                      </label>
                      <input
                        className="pl14"
                        type="text"
                        id="national"
                        placeholder="e.g. 0123456789"
                        required
                        value={formData.nationalIdNumber}
                        onChange={(e) => setFormData(prev => ({ ...prev, nationalIdNumber: e.target.value }))}
                      />
                    </fieldset>
                    <p className="note">Note: We only support JPG and PNG images under 25 MB.</p>
                  </div>
                </div>

                <div className="project-info-form style">
                  <h6 className="title mb32">Step 3: Personal information</h6>
                  <div className="form-inner">
                    {[
                      { id: 'name', label: 'Your name', placeholder: 'Enter your name', value: 'name' },
                      { id: 'state', label: 'State / Province', placeholder: 'e.g. Vietnamese', value: 'state' },
                      { id: 'address', label: 'Address', placeholder: 'Enter your address', value: 'address' }
                    ].map((field) => (
                      <fieldset key={field.id} className="mb22">
                        <label className="fz16 mb8" htmlFor={field.id}>
                          {field.label}
                        </label>
                        <input
                          className="pl14"
                          type="text"
                          id={field.id}
                          placeholder={field.placeholder}
                          required
                          value={formData[field.value as keyof FormData] as string}
                          onChange={(e) => setFormData(prev => ({ ...prev, [field.value]: e.target.value }))}
                        />
                      </fieldset>
                    ))}

                    <div className="flex mb22">
                      <div className="col50">
                        <label className="fz16 mb8">City</label>
                        <input
                          className="pl14"
                          type="text"
                          placeholder="Enter your city"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        />
                      </div>
                      <div className="col50">
                        <label className="fz16 mb8">Post code</label>
                        <input
                          className="pl14"
                          type="text"
                          placeholder="e.g. 1995"
                          required
                          value={formData.postCode}
                          onChange={(e) => setFormData(prev => ({ ...prev, postCode: e.target.value }))}
                        />
                      </div>
                    </div>

                    <fieldset className="checkbox">
                      <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        checked={formData.termsAccepted}
                        onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
                      />
                      <label htmlFor="checkbox" className="icon"></label>
                      <label htmlFor="checkbox">
                        I accept the Term of Conditions and Privacy Policy
                      </label>
                    </fieldset>
                  </div>
                </div>

                <div className="wrap-btn">
                  <button type="submit" className="tf-button style2">
                    Submit project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSubmitProjectSection;