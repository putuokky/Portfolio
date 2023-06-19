// const sosmeds = [
//   {
//     name: 'Facebook',
//     link: 'https://www.facebook.com/okkymahes/',
//   },
//   {
//     name: 'Twitter',
//     link: 'https://twitter.com/okkymhwr',
//   },
//   {
//     name: 'Instagram',
//     link: 'https://instagram.com/okkymahesora',
//   },
//   {
//     name: 'LinkedIn',
//     link: 'https://www.linkedin.com/in/okky-maheswara',
//   },
// ];

export default function handler(req, res) {
  res.status(200).json(
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/okkymahes/',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/okkymhwr',
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/okkymahesora',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/okky-maheswara',
    },
  )
}
