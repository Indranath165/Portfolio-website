import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10"
    >
      <SkillText />

      <div className="flex flex-col items-center mt-4 gap-5">
        {/* First row - most items */}
        <div className="flex flex-row justify-center gap-5">
          {SKILL_DATA.slice(0, 10).map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        
        {/* Second row - fewer items */}
        <div className="flex flex-row justify-center gap-5">
          {SKILL_DATA.slice(10, 17).map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + 10}
            />
          ))}
        </div>
        
        {/* Third row - even fewer items */}
        <div className="flex flex-row justify-center gap-5">
          {SKILL_DATA.slice(17, 22).map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + 17}
            />
          ))}
        </div>
        
        {/* Fourth row - least items */}
        <div className="flex flex-row justify-center gap-5">
          {SKILL_DATA.slice(22).map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + 22}
            />
          ))}
        </div>
      </div>



      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
