module.exports = {
  path: '/_next/image',
  loader: 'default',
  redirects: async () => {
    return [
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/zakki_haris/',
        permanent: false
      },
      {
        source: '/facebook',
        destination: 'https://web.facebook.com/zacky.haris.1',
        permanent: false
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/zakki-abdurrahman-haris-785983118/',
        permanent: false
      },
      {
        source: '/github',
        destination: 'https://github.com/zakkiharis',
        permanent: false
      }
    ]
  }
}
