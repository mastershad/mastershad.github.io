import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function SkillGroup({ group }) {
  return (
    <div className="skill-group">
      <h3 className="skill-group__label">{group.label}</h3>
      <ul className="skill-group__list">
        {group.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const { t } = useLanguage();
  const { skills } = t;

  return (
    <section id="skills" className="section">
      <h2 className="section__title">{skills.title}</h2>
      <div className="skills-grid">
        <SkillGroup group={skills.technical} />
        <SkillGroup group={skills.practice} />
        <SkillGroup group={skills.iot} />
        <SkillGroup group={skills.soft} />
        <SkillGroup group={skills.languages} />
      </div>
    </section>
  );
}

export default Skills;
