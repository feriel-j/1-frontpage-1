import React, { useContext } from 'react'
import { DataContext } from '../utils/SwitchedData';
import KsdCompContactLink from './KsdCompContactLink';
import KsdCompLinkedinIcon from './icons/KsdCompLinkedinIcon';
import KsdCompInstagramIcon from './icons/KsdCompInstagramIcon';
import KsdCompTwitterIcon from './icons/KsdCompTwitterIcon';
import KsdCompFacebookIcon from './icons/KsdCompFacebookIcon';
import "../_dist/KsdCompContactDetails.css";
interface ContactDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
  }
const KsdCompContactDetails = ({ ...props }: ContactDetailsProps) => {
    // Access to the values data that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  return (
   <section  {...props}
   className={`contact-details-container ${
     props.className ? props.className : ""
   }`}>
    
        <div className="contact-details-box">
          <h3>{data?.about.header_1}</h3>
          <h4>Contact@korewakore.com</h4>
          <h4>Media@korewakore.com</h4>
        </div>
        <div className="contact-details-box">
          <h3>{data?.about.header_2}</h3>
          <div className="contact-links-container">
            <a href="https://www.linkedin.com/showcase/kore-wa-kore/?viewAsMember=true" rel="noreferrer" target="_blank">
              <KsdCompContactLink icon={<KsdCompLinkedinIcon />}>
                {data?.about.linkedin}{" "}
              </KsdCompContactLink>
            </a>
            <a href="https://www.instagram.com/kwk.hub/" rel="noreferrer" target="_blank">
              <KsdCompContactLink icon={<KsdCompInstagramIcon />}>
                {data?.about.instagram}
              </KsdCompContactLink>
            </a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FKWK_hub" rel="noreferrer" target="_blank">
              <KsdCompContactLink icon={<KsdCompTwitterIcon />}>
                {data?.about.twitter}
              </KsdCompContactLink>
            </a>
            <a href="https://www.facebook.com/KWK.hub" rel="noreferrer" target="_blank">
              <KsdCompContactLink icon={<KsdCompFacebookIcon />}>
                {data?.about.facebook}
              </KsdCompContactLink>
            </a>
          </div>
        </div>
     
   </section>
  )
}

export default KsdCompContactDetails