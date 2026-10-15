import React from 'react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: "Tenant Rights and Awareness",
      links: [
        { title: "City of College Park - Renting in College Park", url: "https://www.collegeparkmd.gov/208/Renting-in-College-Park", description: "Includes renter information and the Maryland Bill of Tenants Rights." },
        { title: "Maryland State Government - The Office of Tenant and Landlord Affairs", url: "https://dhcd.maryland.gov/housing/renter-landlord-resources/tenant-and-landlord-affairs", description: "The Office of Tenant and Landlord Affairs publishes the Maryland Tenants’ Bill of Rights, which your landlord is required to attach to your lease. They can help you understand your rights, report landlord discrimination to enforcement agencies, and more." },
        { title: "Link to city of college park", url: "https://www.instagram.com/thequalityprojectd4/", description: "A project by former city council liaison and Rate Your Landlord team lead Nick Dispirito to engage with city council district four residents." },
        { title: "The Quality Project", url: " https://www.instagram.com/thequalityprojectd4/", description: "Information about protection against discrimination in housing." },
        // { title: "RYL at UMD on Instagram", url: "https://www.hud.gov/hud-partners#FairHousing", description: "Information about protection against discrimination in housing." }
      ]
    },
    {
      category: "Legal Aid",
      links: [
        { title: "Community Legal Services", url: "https://www.clspgc.org/need-help/", description: "CLS provides free legal assistance to income-eligible clients in Prince George’s County in matters related to landlord and tenant disputes." },
        { title: "UMD Student Legal Aid", url: "https://legalaid.umd.edu/", description: "Free legal aid offered to UMD students by the department of community affairs." },
        { title: "UMD Graduate Student Legal Aid", url: "https://legalaid.umd.edu/graduate-students", description: "Free legal aid offered to UMD graduate students." }
      ]
    },
    {
      category: "Hotlines",
      links: [
        { title: "City of College Park 24/7 Hotline", url: "tel:+12404873588", description: "Call all at any hour to be triaged to the correct city department." },
        { title: "Maryland Office of Tenant and Landlord Affairs", url: "tel:+18555113423", description: "Call if you are a tenant and need to report a violation or get help with a landlord-tenant issue." },

      ]
    }
  ];

  return (
    <div className="resources-page">
      <div className="hero">
        <h1>Renter Resources</h1>
        <p className="hero__subtitle">Helpful information, legal aid, and support for tenants in Pittsburgh.</p>
      </div>
      <div className="resources-content">
        <div className="resources-categories">
          {resources.map((section, index) => (
            <div key={index} className="resources-category">
              <div className="resources-category__header">
                <h2 className="resources-category__title">{section.category}</h2>
              </div>
              <div>
                {section.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="resources-link">
                    <div className="resources-link__inner">
                      <div>
                        <h3 className="resources-link__title">{link.title}</h3>
                        <p className="resources-link__desc">{link.description}</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="resources-link__icon" style={{ width: '1.25rem', height: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
  
        <div className="resources-disclaimer">
          <div className="resources-disclaimer__icon">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="resources-disclaimer__title">Disclaimer</h4>
            <p className="resources-disclaimer__text">
              The information provided on this page is for educational purposes only and does not constitute legal advice.
              Please consult with a qualified attorney or legal aid organization for advice regarding your specific situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
