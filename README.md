# Golf Club Auction Site

## Overview
An online auction platform dedicated to used golf clubs, providing a specialized marketplace for golfers to buy, sell, and bid on equipment.

## Features
- User authentication (sign-up/sign-in)
- Create and manage auction listings
- Real-time bidding system
- Search and filter by club type, brand, and price
- User profiles and transaction history

## Technology Stack
- **Frontend**: HTML, CSS, Bulma, JavaScript
- **Backend**: Google Firebase (Authentication, Cloud Firestore, Hosting)

## Database Collections

**Users**: username, email, password, ratings, transactionHistory

**Listings**: listing_id, clubName, brand, type, description, images, startingBid, reservePrice, currentBid, auctionStart, auctionEnd, sellerId, status

**Bids**: bid_id, listing_id, user_id, bidAmount, timestamp

**Transactions**: transaction_id, buyer_id, seller_id, listing_id, finalPrice, date

## Setup

1. Clone the repository
2. Create a Firebase project and enable Authentication and Firestore
3. Add Firebase config to `firebase-config.js`
4. Open `index.html` in browser or deploy with `firebase deploy`

## Team
Ryan Hogan & Alan Sologov

**Course**: IS371
