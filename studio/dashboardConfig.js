export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff0b61efd243e1f4d913e5a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u7cqmiim',
                  apiId: 'e61b20b5-1079-4343-a6df-1b28cd485869'
                },
                {
                  buildHookId: '5ff0b61e3aa240242c35c829',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k6tdft2z',
                  apiId: '1c050953-be31-455b-82da-61467132963a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sandorclavijo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k6tdft2z.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
