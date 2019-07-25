import React from 'react';
import { graphql } from 'gatsby';

export const fragment = graphql`
  fragment TeamMemberSection on WordPress_Page_Pagesectionfields_Sections_TeamMembers {
    teamMembers {
      teamMember {
        ... on WordPress_TeamMember {
          title
          id
          profileFields {
            ...ProfileFields
          }
        }
      }
    }
  }

  fragment ProfileFields on WordPress_TeamMember_Profilefields {
    bio
    github
    website
    twitter
    title
    photo {
      altText
      sourceUrl
    }
  }
`;

const TeamMembers = ({ teamMembers }) => (
  <>
    {teamMembers.map(({ teamMember }) => (
      <section key={teamMember.id}>
        <h2>
          {teamMember.title}, {teamMember.profileFields.title}
        </h2>
        <img
          src={teamMember.profileFields.photo.sourceUrl}
          alt={teamMember.profileFields.photo.altText}
        />
      </section>
    ))}
  </>
);

export default TeamMembers;
