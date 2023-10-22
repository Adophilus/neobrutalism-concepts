import Alpine from 'alpinejs'
import products from './products'

Alpine.store("sidebar", [
  {
    text: 'Dashboard',
    icon: 'fa-solid fa-gauge-simple'
  },
  {
    text: 'Products',
    icon: 'fa-solid fa-store'
  },
  {
    text: 'Contacts',
    icon: 'fa-solid fa-address-book'
  },
  {
    text: 'Customers',
    icon: 'fa-solid fa-users'
  },
  {
    text: 'Sales',
    icon: 'fa-solid fa-cart-shopping'
  },
  {
    text: 'Analytics',
    icon: 'fa-solid fa-chart-simple'
  }
])

Alpine.store("products", products)
Alpine.store("footer", [
  {
    icon: "fa-solid fa-earth-americas",
    text: "English"
  },
  {
    text: "Privacy Policy"
  },
  {
    text: "Licence",
  },
  {
    text: "API"
  }
])

Alpine.store("teamMembers", [
  {
    name: "Jonathan Myers",
    image: "/jonathan-myers.jpg"
  },
  {
    name: "Anna Darlene",
    image: "/anna-darlene.jpg"
  },
  {
    name: "Michael Ferris",
    image: "/michael-ferris.jpg"
  }
])

Alpine.start()
