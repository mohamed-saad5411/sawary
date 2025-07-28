'use client'

import CompanySlider from "@/app/_mainlayout/_companyslider/page.jsx";
import Header from "@/app/_mainlayout/_header/page.jsx";
import ProjectsSlider from "@/app/_mainlayout/_projectsslider/page.jsx";
import UnitsSlider from "@/app/_mainlayout/_unitsslider/page.jsx";
import UpdatesSlider from "@/app/_mainlayout/_updatesslider/page.jsx";

export default function Mainpage() {


    return <>
        <Header/>
        <UnitsSlider/>
        <ProjectsSlider/>
        <CompanySlider/>
        <UpdatesSlider/>
    </>
}
