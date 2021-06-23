import * as React from "react";
import ContentEditable from "react-contenteditable";
import { useSelector } from "react-redux";
import { Frame } from "framer";
import {
  educationOptions,
  experienceOptions,
  interestsOptions,
  languagesOptions,
  linksOptions,
  skillsOptions,
  toolsOptions,
} from "../../options";

import "./Resume.scss";

interface IResume {}

const Resume: React.FunctionComponent<IResume> = (props: IResume) => {
  const { topBarColor, isPreview } = useSelector(
    (state: any) => state.mainReducer
  );

  const variants = {
    previewDisabled: {
      marginTop: "100px",
      padding: "6rem 10rem",
      width: "210mm",
      height: "auto",
      minHeight: "297mm",
      marginRight: "auto",
      marginLeft: "auto",
      boxShadow: "0px 38px 62px -26px rgba(0, 0, 0, 0.75)",
    },
    previewEnabled: {
      marginTop: "60px",
      padding: "6rem 10rem",
      width: "210mm",
      height: "auto",
      minHeight: "297mm",
      marginRight: "auto",
      marginLeft: "auto",
      boxShadow: "0px 38px 62px -26px rgba(0, 0, 0, 0.75)",
      scale: 0.7,
      originY: 0,
    },
  };

  React.useEffect(() => {
    if (isPreview) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isPreview]);
  return (
    <Frame
      id="resume"
      backgroundColor="white"
      position="relative"
      variants={variants}
      y={0}
      animate={isPreview ? "previewEnabled" : "previewDisabled"}
    >
      <div className="resume">
        <div
          className="top-bar"
          style={{
            backgroundColor: topBarColor,
          }}
        />
        <ResumeHeader />
        <div className="resume-body">
          <div>
            <ResumeExperience />
            <ResumeEducation />
          </div>
          <div>
            <ResumePersonalInfo />
            <ResumeToolsAndTechnologies />
            <ResumeOtherSkills />
            <ResumeLanguages />
            <ResumeSocials />
            <ResumeInterests />
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default Resume;

const ResumeInterests = () => {
  const { isPreview, isProcessing } = useSelector(
    (state: any) => state.mainReducer
  );

  const [elRefs, setElRefs] = React.useState<any[]>([]);
  const [interests, setInterests] = React.useState<any[]>(interestsOptions);
  let arrLength = interests.length;

  const handleAddToolClick = () => {
    setInterests([...Array.from(interests), "Edit"]);
  };

  React.useEffect(() => {
    setElRefs(interests.map((_interest) => React.createRef()));
  }, [arrLength, interests]);

  const handleChange = (e: any, index: number) => {
    let _interests = Array.from(interests);
    _interests[index] = e.target.value;
    setInterests(_interests);
  };
  return (
    <div className="resume-interests">
      <h3 className="block-title regular">Interests</h3>
      <div className="interests light">
        {interests.map((_interest: string, key: number) => (
          <span key={key}>
            <ContentEditable
              ref={elRefs[key]}
              html={_interest}
              onChange={(e) => handleChange(e, key)}
            />
          </span>
        ))}
        {!isPreview && !isProcessing && (
          <span onClick={handleAddToolClick} className="add">
            +
          </span>
        )}
      </div>
    </div>
  );
};

const ResumeSocials = () => {
  const { isPreview, isProcessing } = useSelector(
    (state: any) => state.mainReducer
  );
  const [elRefs, setElRefs] = React.useState<any[]>([]);
  const [links, setLinks] = React.useState<any[]>(linksOptions);
  let arrLength = links.length;

  const handleAddToolClick = () => {
    setLinks([...Array.from(links), "Edit"]);
  };

  React.useEffect(() => {
    setElRefs(links.map((_link) => React.createRef()));
  }, [arrLength, links]);

  const handleChange = (e: any, index: number) => {
    let _links = Array.from(links);
    _links[index] = e.target.value;
    setLinks(_links);
  };
  return (
    <div className="resume-socials">
      <h3 className="block-title regular">Social links</h3>
      <div className="socials-links light">
        {links.map((_link: string, key: number) => (
          <span key={key}>
            <ContentEditable
              ref={elRefs[key]}
              html={_link}
              onChange={(e) => handleChange(e, key)}
            />
          </span>
        ))}
        {!isPreview && !isProcessing && (
          <span onClick={handleAddToolClick} className="add">
            +
          </span>
        )}
      </div>
    </div>
  );
};

const ResumeLanguages = () => {
  const { isPreview, isProcessing } = useSelector(
    (state: any) => state.mainReducer
  );
  const [elRefs, setElRefs] = React.useState<any[]>([]);
  const [languages, setLanguages] = React.useState<any[]>(languagesOptions);
  let arrLength = languages.length;

  const handleAddToolClick = () => {
    setLanguages([...Array.from(languages), "Edit"]);
  };

  React.useEffect(() => {
    setElRefs(languages.map((_language) => React.createRef()));
  }, [arrLength, languages]);

  const handleChange = (e: any, index: number) => {
    let _languages = Array.from(languages);
    _languages[index] = e.target.value;
    setLanguages(_languages);
  };
  return (
    <div className="resume-languages">
      <h3 className="block-title regular">Languages</h3>
      <div className="languages light">
        {languages.map((_skill: string, key: number) => (
          <span key={key}>
            <ContentEditable
              ref={elRefs[key]}
              html={_skill}
              onChange={(e) => handleChange(e, key)}
            />
          </span>
        ))}
        {!isPreview && !isProcessing && (
          <span onClick={handleAddToolClick} className="add">
            +
          </span>
        )}
      </div>
    </div>
  );
};

const ResumeOtherSkills = () => {
  const { isPreview, isProcessing } = useSelector(
    (state: any) => state.mainReducer
  );
  const [elRefs, setElRefs] = React.useState<any[]>([]);
  const [skills, setSkills] = React.useState<any[]>(skillsOptions);
  let arrLength = skills.length;

  const handleAddToolClick = () => {
    setSkills([...Array.from(skills), "Edit"]);
  };

  React.useEffect(() => {
    setElRefs(skills.map((_skill) => React.createRef()));
  }, [arrLength, skills]);

  const handleChange = (e: any, index: number) => {
    let _skills = Array.from(skills);
    _skills[index] = e.target.value;
    setSkills(_skills);
  };

  return (
    <div className={`resume-other-skills`}>
      <h3 className="block-title regular">Other Skills</h3>
      <div className="other-skills light">
        {skills.map((_skill: string, key: number) => (
          <span key={key}>
            <ContentEditable
              ref={elRefs[key]}
              html={_skill}
              onChange={(e) => handleChange(e, key)}
            />
          </span>
        ))}
        {!isPreview && !isProcessing && (
          <span onClick={handleAddToolClick} className="add">
            +
          </span>
        )}
      </div>
    </div>
  );
};

const ResumeToolsAndTechnologies = () => {
  const { isPreview, isProcessing } = useSelector(
    (state: any) => state.mainReducer
  );
  const [elRefs, setElRefs] = React.useState<any[]>([]);
  const [tools, setTools] = React.useState<any[]>(toolsOptions);
  let arrLength = tools.length;
  const handleAddToolClick = () => {
    setTools([...Array.from(tools), "Edit"]);
  };

  React.useEffect(() => {
    setElRefs(tools.map((_tool) => React.createRef()));
  }, [arrLength, tools]);

  const handleChange = (e: any, index: number) => {
    let _tools = Array.from(tools);
    _tools[index] = e.target.value;
    setTools(_tools);
  };

  return (
    <div className={`resume-tools-and-technologies`}>
      <h3 className="block-title regular">Tools & Technologies</h3>
      <div className="tools-and-technologies light">
        {tools.map((_tool: string, key: number) => (
          <span key={key}>
            <ContentEditable
              ref={elRefs[key]}
              html={_tool}
              onChange={(e) => handleChange(e, key)}
            />
          </span>
        ))}
        {!isPreview && !isProcessing && (
          <span onClick={handleAddToolClick} className="add">
            +
          </span>
        )}
      </div>
    </div>
  );
};

const ResumePersonalInfo = React.memo(() => {
  return (
    <div className={`resume-personal-info`}>
      <div className="info-email regular info-with-icon">
        <i className="fa fa-envelope" aria-hidden="true"></i>
        <ContentEditable html={"hamza@halber.io"} onChange={(e) => void 0} />
      </div>
      <div className="info-email regular info-with-icon">
        <i className="fa fa-birthday-cake"></i>
        <ContentEditable html={"30 Aug 1993"} onChange={(e) => void 0} />
      </div>
      <div className="info-phone regular info-with-icon">
        <i className="fa fa-phone" aria-hidden="true"></i>
        <ContentEditable html={"+216 54 071 821"} onChange={(e) => void 0} />
      </div>
      <div className="info-city regular info-with-icon">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <ContentEditable html={"Monastir"} onChange={(e) => void 0} />
      </div>
    </div>
  );
});

const ResumeEducation = React.memo(() => {
  const { isPreview, isProcessing } = useSelector(
    (state: any) => state.mainReducer
  );

  const [educations, setEducations] = React.useState<any[]>(educationOptions);
  const [educationTitle, setEducationTitle] =
    React.useState<string>("Education");

  const handleAddClick = () => {
    setEducations([
      ...Array.from(educations),
      {
        title: "Education title",
        school: "School name",
        duration: "Duration",
      },
    ]);
  };

  const handleEducationChange = (
    value: any,
    index: number,
    keyName: string
  ) => {
    const _educations = Array.from(educations);
    _educations[index][keyName] = value;
    setEducations(_educations);
  };

  const handleEducationRemove = (index: number) => {
    let _educations = Array.from(educations);
    _educations.splice(index, 1);
    setEducations(_educations);
  };
  return (
    <div className={`resume-education`}>
      <h1 className="block-title medium">
        <ContentEditable
          html={educationTitle}
          onChange={(e) => setEducationTitle(e.target.value)}
        />
      </h1>
      <div className="education">
        {educations.map((_education: any, key: number) => (
          <SingleEducation
            key={key}
            index={key}
            education={_education}
            handleEducationChange={handleEducationChange}
            handleEducationRemove={handleEducationRemove}
          />
        ))}
      </div>
      {!isPreview && !isProcessing && (
        <span onClick={handleAddClick} className="add">
          + Add block
        </span>
      )}
    </div>
  );
});

const SingleEducation = ({
  education,
  handleEducationChange,
  index,
  handleEducationRemove,
}: any) => {
  return (
    <div className={`single-education`}>
      <input
        className="remove"
        type="button"
        value="remove"
        onClick={() => handleEducationRemove(index)}
      />
      <h1 className="education-speciality regular">
        <ContentEditable
          html={education.title}
          onChange={(e) =>
            handleEducationChange(e.target.value, index, "title")
          }
        />
      </h1>
      <h1 className="education-duration light">
        <ContentEditable
          html={education.duration}
          onChange={(e) =>
            handleEducationChange(e.target.value, index, "duration")
          }
        />
      </h1>
      <h1 className="education-school light">
        <ContentEditable
          html={education.school}
          onChange={(e) =>
            handleEducationChange(e.target.value, index, "school")
          }
        />
      </h1>
    </div>
  );
};

const ResumeExperience = React.memo(() => {
  const [experiences, setExperiences] =
    React.useState<any[]>(experienceOptions);

  const [experienceTitle, setExperienceTitle] =
    React.useState<string>("Experience");

  const handleAddClick = () => {
    setExperiences([
      ...Array.from(experiences),
      {
        title: "Experience Title",
        company: "Company",
        duration: "Duration",
        about: "Experience description",
      },
    ]);
  };

  const handleExperienceChange = (
    value: any,
    index: number,
    keyName: string
  ) => {
    const _experiences = Array.from(experiences);
    _experiences[index][keyName] = value;
    setExperiences(_experiences);
  };
  const { isPreview, isProcessing } = useSelector(
    (state: any) => state.mainReducer
  );

  const handleExperienceRemove = (index: number) => {
    let _experiences = Array.from(experiences);
    _experiences.splice(index, 1);
    setExperiences(_experiences);
  };

  return (
    <div className={`resume-experience`}>
      <h1 className="block-title medium">
        <ContentEditable
          html={experienceTitle}
          onChange={(e: any) => setExperienceTitle(e.target.value)}
        />
      </h1>
      <div className="experience ">
        {experiences.map((_experience: any, key: number) => (
          <SingleExperience
            key={key}
            index={key}
            experience={_experience}
            handleExperienceChange={handleExperienceChange}
            handleExperienceRemove={handleExperienceRemove}
          />
        ))}
      </div>
      {!isPreview && !isProcessing && (
        <div onClick={handleAddClick} className="add">
          + Add block
        </div>
      )}
    </div>
  );
});

const SingleExperience = ({
  experience,
  handleExperienceChange,
  handleExperienceRemove,
  index,
}: any) => {
  return (
    <div className={`single-experience`}>
      <input
        className="remove"
        type="button"
        value="remove"
        onClick={() => handleExperienceRemove(index)}
      />
      <h1 className="experience-title regular">
        <ContentEditable
          html={experience.title}
          onChange={(e) =>
            handleExperienceChange(e.target.value, index, "title")
          }
        />
      </h1>
      <h1 className="experience-company light">
        <ContentEditable
          html={experience.company}
          onChange={(e) =>
            handleExperienceChange(e.target.value, index, "company")
          }
        />
      </h1>
      <h1 className="experience-duration light">
        <ContentEditable
          html={experience.duration}
          onChange={(e) =>
            handleExperienceChange(e.target.value, index, "duration")
          }
        />
      </h1>
      <h1 className="experience-about light">
        <ContentEditable
          html={`${experience.about}`}
          onChange={(e) => void 0}
        />
      </h1>
    </div>
  );
};

const ResumeHeader = () => {
  const userName = React.useRef("Ayech Hamza");
  const title = React.useRef("Co-Founder & CTO at Halber");

  const [avatar, setAvatar] = React.useState<string>("");
  const [avatarFile, setAvatarFile] = React.useState<null | string>(null);

  const handleChange = (evt: any, name: any) => {
    //@ts-ignore
    [name].current = evt.target.value;
  };

  const handleAvatarChange = (e: any) => {
    const file = e.target.files[0];
    const src = URL.createObjectURL(file);
    if (src) {
      setAvatarFile(src);
    }
  };
  return (
    <div className="resume-header">
      <div className="user-avatar">
        <input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
        />
        <label htmlFor={"avatar"}>
          <div className="avatar-hover">
            <i className="fa fa-camera"></i>
          </div>

          <img
            alt="user-avatar"
            src={
              avatarFile
                ? avatarFile
                : "https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            }
          />
        </label>
      </div>
      <div className={`user-info`}>
        <h3 className="user-name medium">
          <ContentEditable
            html={userName.current}
            onChange={(e) => handleChange(e, "userName")}
          />
        </h3>
        <div className="user-title light">
          <ContentEditable
            html={title.current}
            onChange={(e) => handleChange(e, "title")}
          />
        </div>
      </div>
    </div>
  );
};
