const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here

const navItem1 = document.querySelector('body > div > header > nav > a:nth-child(1)');
navItem1.textContent = ('Services');

const navItem2 = document.querySelector('body > div > header > nav > a:nth-child(2)');
navItem2.textContent = ('Product');

const navItem3 = document.querySelector('body > div > header > nav > a:nth-child(3)');
navItem3.textContent = ('Vision');

const navItem4 = document.querySelector('body > div > header > nav > a:nth-child(4)');
navItem4.textContent = ('Features');

const navItem5 = document.querySelector('body > div > header > nav > a:nth-child(5)');
navItem5.textContent = ('About');

const navItem6 = document.querySelector('body > div > header > nav > a:nth-child(6)');
navItem5.textContent = ('Contact');

const img = document.querySelector('#logo-img');
img.setAttribute("src","img/logo.png")

const sectionH1 = document.querySelector('body > div > section.cta > div > h1');
sectionH1.textContent = ('DOM Is Awesome');

const sectionButton = document.querySelector('body > div > section.cta > div > button');
sectionButton.textContent = ('Get Started');

const img1 = document.querySelector('#cta-img');
img1.setAttribute("src","img/header-img.png")

const section2H4 = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > h4');
section2H4.textContent = ('Features');

const section2P = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > p');
section2P.textContent = ('Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');

const section3H4 = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > h4');
section3H4.textContent = ('About');

const section3P = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > p');
section3P.textContent = ('About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');

const img2 = document.querySelector('#middle-img');
img2.setAttribute("src","img/mid-page.jpg")

const section4H4 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4');
section4H4.textContent = ('Services');

const section4P = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > p');
section4P.textContent = ('Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');

const section5H4 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4');
section5H4.textContent = ('Product');

const section5P = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > p');
section5P.textContent = ('Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');

const section6H4 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4');
section6H4.textContent = ('Vision');

const section6P = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > p');
section6P.textContent = ('Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');

const section7H4 = document.querySelector('body > div > section.contact > h4');
section7H4.textContent = ('Contact');

const section7P1 = document.querySelector('body > div > section.contact > p:nth-child(2)');
section7P1.textContent = ('123 Way 456 Street Somewhere, USA');

const section7P2 = document.querySelector('body > div > section.contact > p:nth-child(3)');
section7P2.textContent = ('1 (888) 888-8888');

const section7P3 = document.querySelector('body > div > section.contact > p:nth-child(4)');
section7P3.textContent = ('sales@greatidea.io');

const footer = document.querySelector('body > div > footer > p');
footer.textContent = ('Copyright Great Idea! 2020');

