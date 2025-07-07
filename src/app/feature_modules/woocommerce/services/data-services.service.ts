import { Injectable } from '@angular/core';
import { Orders, Product, HomeTab, NotificationsCard, Notification } from '@app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  public currentUserDetails: any;
  public currentUser: any;
  public item_tab: Array<HomeTab> = [
    { title: 'Overview' },
    { title: 'Related' },
    { title: 'Product Reviews' }
  ];
  public cart: Array<any>;
  card: NotificationsCard = {
    image: 'assets/images/products/1.jpg',
    title: 'Kya aapne kabhi online hotel book kia hai???\nHotel? Sastago',
    time: 9
  };


  notifications: Notification = {
    all: [
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card
    ],
    deals: [
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card
    ],
    orders: [],
    others: [
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card
    ]
  };

  trending = [
    'jacket',
    'drone',
    'shoes for men',
    'car accessories',
    'blazer for men',
    'watches men',
    'sports shoes for men',
    'earphone bluetooth',
    'jackets for men',
    'memory card'
  ];

  tabs: Array<HomeTab> = [
    { title: 'Popular' },
    { title: 'Recently Viewed' },
    { title: 'Fashion' },
    { title: 'Tops' },
    { title: 'Shoes' },
    { title: 'Automotive' },
    { title: 'Bottoms' },
    { title: 'Watches' },
    { title: 'Wallets & Bags' },
    { title: 'Accessories' },
    { title: 'Gadgets' },
    { title: 'Hobbies' },
    { title: 'Phone Upgrades' },
    { title: 'Home Decor' }
  ];


  products_1: Array<Product> = [
    {
      name: 'Bianca Top',
      costPrice: 128,
      discount: 80,
      offer: true,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/1.jpg',
        'assets/images/products/1_1.jpg',
        'assets/images/products/1_2.jpg'
      ],
      ratingCount: 11,
      storeRatingCount: 11,
      currency: '$',
      bought: 1200,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      storeRating: 18090,
      storeRate: 3,
      soldBy: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget.ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti .....',
          rating: 5,
          images: [
            'assets/images/products/1.jpg',
            'assets/images/products/1_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/1_2.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. loream...',
          rating: 5,
          images: ['assets/images/products/1.jpg']
        }
      ],
      storeReviews: [
        {
          image: 'assets/images/products/1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti...',
          rating: 5,
          images: [
            'assets/images/products/1.jpg',
            'assets/images/products/1_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/1_2.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti...',
          rating: 5,
          images: ['assets/images/products/1.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyerGuarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    },
    {
      name: 'Scarpetta Dress',
      costPrice: 198,
      discount: 80,
      offer: false,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/2.jpg',
        'assets/images/products/2_1.jpg',
        'assets/images/products/2_2.jpg'
      ],
      ratingCount: 11,
      storeRatingCount: 11,
      currency: '$',
      bought: 400,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      storeRating: 18090,
      storeRate: 3,
      soldBy: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/2.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti....',
          rating: 5,
          images: ['assets/images/products/2.jpg']
        }
      ],
      storeReviews: [
        {
          image: 'assets/images/products/2_1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti...',
          rating: 5,
          images: [
            'assets/images/products/2.jpg',
            'assets/images/products/2_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/2.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti....',
          rating: 5,
          images: ['assets/images/products/2.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyerGuarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    },
    {
      name: 'Misty Dress',
      costPrice: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/3.jpg',
        'assets/images/products/3_1.jpg',
        'assets/images/products/3_2.jpg'
      ],
      ratingCount: 11,
      storeRatingCount: 11,
      currency: '$',
      bought: 365,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      storeRating: 18090,
      storeRate: 3,
      soldBy: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/3.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti....',
          rating: 5,
          images: ['assets/images/products/3.jpg']
        }
      ],
      storeReviews: [
        {
          image: 'assets/images/products/3_1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti...',
          rating: 5,
          images: [
            'assets/images/products/3.jpg',
            'assets/images/products/3_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/3.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti....',
          rating: 5,
          images: ['assets/images/products/3.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyerGuarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    },
    {
      name: 'Blanch Dress',
      costPrice: 248,
      discount: 20,
      offer: true,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/4.jpg',
        'assets/images/products/4_1.jpg',
        'assets/images/products/4_2.jpg'
      ],
      ratingCount: 11,
      storeRatingCount: 11,
      currency: '$',
      bought: 1200,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      storeRating: 18090,
      storeRate: 3,
      soldBy: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/4.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti....',
          rating: 5,
          images: ['assets/images/products/4.jpg']
        }
      ],
      storeReviews: [
        {
          image: 'assets/images/products/4_1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti...',
          rating: 5,
          images: [
            'assets/images/products/4.jpg',
            'assets/images/products/4_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/4.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti....',
          rating: 5,
          images: ['assets/images/products/4.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyerGuarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    },
    {
      name: 'Scarlett Dress',
      costPrice: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/5.jpg',
        'assets/images/products/5_1.jpg',
        'assets/images/products/5_2.jpg'
      ],
      ratingCount: 11,
      storeRatingCount: 11,
      currency: '$',
      bought: 234,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      storeRating: 18090,
      storeRate: 3,
      soldBy: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/5.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti....',
          rating: 5,
          images: ['assets/images/products/5.jpg']
        }
      ],
      storeReviews: [
        {
          image: 'assets/images/products/5_1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti....',
          rating: 5,
          images: [
            'assets/images/products/5.jpg',
            'assets/images/products/5_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/5.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. loream.......',
          rating: 5,
          images: ['assets/images/products/5.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyerGuarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    }
  ];


  orders: Array<Orders> = [
    {
      product: this.products_1[0],
      amount: 123,
      billingAddress: {
        addressLine1: 'home',
        addressLine2: 'home',
        city: 'NY',
        lastName: 'bond',
        phoneNumber: 1125532553,
        zipcode: 12345,
        country: 'US',
        firstName: 'James',
        state: 'Arizona'
      },
      shippingAddress: {
        addressLine1: 'home',
        addressLine2: 'home',
        city: 'NY',
        lastName: 'bond',
        phoneNumber: 1125532553,
        zipcode: 12345,
        country: 'US',
        firstName: 'James',
        state: 'Arizona'
      },
      deliveryDate: new Date(),
      id: 'B102013526',
      orderDate: new Date(),
      status: 'Delivered',
      tax: 40
    },
    {
      product: this.products_1[0],
      amount: 123,
      billingAddress: {
        addressLine1: 'home',
        addressLine2: 'home',
        city: 'NY',
        lastName: 'bond',
        phoneNumber: 1125532553,
        zipcode: 12345,
        country: 'US',
        firstName: 'James',
        state: 'Arizona'
      },
      shippingAddress: {
        addressLine1: 'home',
        addressLine2: 'home',
        city: 'NY',
        lastName: 'bond',
        phoneNumber: 1125532553,
        zipcode: 12345,
        country: 'US',
        firstName: 'James',
        state: 'Arizona'
      },
      deliveryDate: new Date(),
      id: 'B102013526',
      orderDate: new Date(),
      status: 'Delivered',
      tax: 40
    }
  ];

  constructor() {
    this.currentUser = {
      id: 2
    };
  }
}

