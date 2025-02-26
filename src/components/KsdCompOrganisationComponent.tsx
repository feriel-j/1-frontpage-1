import React from 'react'
import "../_dist/KsdCompOrganisationComponent.css"
import KsdCompDescriptiveCard from './cards/KsdCompDescriptiveCard';

interface OrganisationProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
  }

const KsdCompOrganisationComponent = ({...props}: OrganisationProps) => {
  return (
    <section {...props} className={`organisation-container ${props.className?props.className:""}`} >
        <KsdCompDescriptiveCard/>
    </section>
  )
}

export default KsdCompOrganisationComponent