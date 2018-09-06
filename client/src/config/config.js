const config = {
  development: {
      'carouselImages': [
        'http://localhost:8090/staff/carousel/images/1',
        'http://localhost:8090/staff/carousel/images/2',
        'http://localhost:8090/staff/carousel/images/3'
      ],
      'carouselUrl': 'http://localhost:8090/staff/carousel/images/',
      'carouselUploadUrl': 'http://localhost:8090/staff/carousel/upload',
      'loginEndpoint': 'http://localhost:8090/staff/login',
      'contactUrl': 'http://localhost:8090/api/contact'
  },
  production: {
    'carouselImages': [
      '/staff/carousel/images/1',
      '/staff/carousel/images/2',
      '/staff/carousel/images/3'
    ],
    'carouselUrl': '/staff/carousel/images/',
    'carouselUploadUrl': '/staff/carousel/upload',
    'loginEndpoint': '/staff/login/',
    'contactUrl': '/api/contact'
  }
}

export default config
