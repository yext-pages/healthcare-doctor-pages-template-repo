import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import Doctor from "../types/autogen";
import PageLayout from "../components/PageLayout";
import CenteredContainer from "../components/atoms/CenteredContainer";
import ResponsiveStack from "../components/atoms/ResponsiveStack";
import DoctorCard from "../components/DoctorCard";
import Section from "../components/atoms/Section";
import DoctorLocationsMap from "../components/DoctorLocationsMap";
import AppointmentGrid from "../components/AppointmentGrid";
import BodyText from "../components/atoms/BodyText";
import Insurances from "../components/Insurances";
import DoctorBackground from "../components/DoctorBackground";
import { ScrollableContainer } from "../components/ScrollingContainer";
import { ScrollableSection } from "../components/atoms/ScrollableSection";
import Reviews from "../components/Reviews";
import Faqs from "../components/Faqs";
import { LocationMap } from "@yext/pages/components";
import { GoogleMaps } from "@yext/components-tsx-maps";

export const config: TemplateConfig = {
  stream: {
    $id: "healthcareProfessionals",
    localization: { locales: ["en"], primary: false },
    fields: [
      "name",
      "slug",
      "npi",
      "description",
      "headshot",
      "healthcare_specialty",
      "healthcare_locationsPracticingAt.address",
      "healthcare_locationsPracticingAt.geocodedCoordinate",
      "insuranceAccepted",
      "educationList",
      "certifications",
      "healthcare_practiceNames",
      "languages",
      "gender",
      "healthcare_fAQs.question",
      "healthcare_fAQs.answer",
    ],
    filter: { entityTypes: ["healthcareProfessional"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  const doctor = document as Doctor;
  return `${doctor.slug}`;
};

function toTitleCase(str : string) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const doctor = document as Doctor;
  return {
    title: doctor.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const DoctorPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  const {
    name,
    healthcare_specialty,
    headshot,
    description,
    insuranceAccepted,
    educationList,
    certifications,
    healthcare_practiceNames,
    languages,
    gender,
    npi,
    healthcare_locationsPracticingAt,
    healthcare_fAQs,
  } = document as Doctor;
  const specialty = healthcare_specialty;

  var genderCapitalized = toTitleCase(gender)

  return (
    <PageLayout>
      <CenteredContainer classname="max-w-5xl">
        <Section>
          <ResponsiveStack className="gap-x-2">
            <DoctorCard
              headshot={headshot}
              name={name}
              specialty={specialty}
              rating={4.5}
              // containerClassname="pr-6"
            />
          <LocationMap
              className="left-32 h-[300px] w-[400px] mt-0"
              clientKey="gme-yextinc"
              coordinate={document.healthcare_locationsPracticingAt[0].geocodedCoordinate}
              provider={GoogleMaps}
            >
            {<svg
              width="40"
              height="40"
              viewBox="0 0 56 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.0951 1C33.1149 1 37.6595 3.03469 40.9491 6.32432C44.2388 9.61396 46.2734 14.1586 46.2734 19.1784C46.2734 25.9554 40.1704 38.558 28.0941 57C16.019 38.5565 9.91669 25.955 9.91669 19.1784C9.91669 14.1586 11.9514 9.61396 15.241 6.32432C18.5307 3.03469 23.0752 1 28.0951 1Z"
                fill="#0F70F0"
                stroke="black"
                strokeOpacity="0.5"
              />
              <path
                d="M28.095 27.2577C32.5571 27.2577 36.1743 23.6405 36.1743 19.1784C36.1743 14.7163 32.5571 11.0991 28.095 11.0991C23.633 11.0991 20.0157 14.7163 20.0157 19.1784C20.0157 23.6405 23.633 27.2577 28.095 27.2577Z"
                fill="white"
              />
            </svg>}
        </LocationMap>
          </ResponsiveStack>



        </Section>

      </CenteredContainer>
      {/* <NavBar labels={["About", "Insurances", "Locations"]} /> */}

      <ScrollableContainer>
        <ScrollableSection title="About" outerContainerClassname="scroll-mt-24">
          <BodyText text={description} className="whitespace-pre-line" />
        </ScrollableSection>
        <ScrollableSection
          title="Education & Background"
          outerContainerClassname="bg-light-green scroll-mt-24"
          innerContainerClassname="max-w-5xl"
        >
          <DoctorBackground
            items={[
              // {
              //   icon: "school",
              //   name: "Education",
              //   details: educationList.institutionName,
              // },
              {
                icon: "file-certificate",
                name: "Board Certifications",
                details: certifications,
              },
              {
                icon: "hospital",
                name: "Practice Names",
                details: healthcare_practiceNames,
              },
              {
                icon: "stethoscope",
                name: "Specialties",
                details: [specialty ?? ""],
              },
              {
                icon: "language",
                name: "Languages Spoken",
                details: languages,
              },
              {
                icon: "venus-mars",
                name: "Gender",
                details: [genderCapitalized],
              },
              {
                icon: "hashtag",
                name: "NPI Number",
                details: [npi],
              },
            ]}
          />
        </ScrollableSection>


        <ScrollableSection
          title="Insurances Accepted"
          outerContainerClassname="scroll-mt-24"
          innerContainerClassname="max-w-5xl"
        >
        
        <Insurances insurances={insuranceAccepted} />
       
        </ScrollableSection>
        <ScrollableSection
          title="FAQs"
          innerContainerClassname="max-w-5xl"
          outerContainerClassname="bg-light-green scroll-mt-24"
        >
          <Faqs faqs={healthcare_fAQs} />
        </ScrollableSection>
      </ScrollableContainer>
    </PageLayout>
  );
};

export default DoctorPage;
