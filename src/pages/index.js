import React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/hero';
import TeamMembers from '../components/team-members';

export const pageQuery = graphql`
  {
    wordPress {
      pageBy(uri: "home") {
        id
        title
        pageSectionFields {
          sections {
            __typename
            ...HeroSection
            ...TeamMemberSection
          }
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const sections = data.wordPress.pageBy.pageSectionFields.sections;

  return (
    <div>
      {sections.map(section => {
        const typeName = section.__typename;

        switch (typeName) {
          case 'WordPress_Page_Pagesectionfields_Sections_Hero':
            return <Hero key={section.id} {...section} />;

          case 'WordPress_Page_Pagesectionfields_Sections_TeamMembers':
            return <TeamMembers key={section.id} {...section} />;

          default:
            return <p>You done busted it.</p>;
        }
      })}
    </div>
  );
};

export default Home;
