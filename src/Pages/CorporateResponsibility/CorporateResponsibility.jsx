import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import HeaderTitleCorporateResponsibility from '../../Components/HeaderTitleCorporateResponsibility'
import CorporateEthics from '../../Components/CorporateEthics'
import CorporateCodeOfConduct from '../../Components/CorporateCodeOfConduct'

function CorporateResponsibility() {
  return (
    <DefaultLayout>
        <HeaderTitleCorporateResponsibility />
        <CorporateEthics />
        <CorporateCodeOfConduct />
    </DefaultLayout>
  )
}

export default CorporateResponsibility
