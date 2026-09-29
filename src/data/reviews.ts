export interface Review {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Ananya M.',
    city: 'Mumbai',
    quote: 'The Daisy Garden Dress arrived soft and perfect — my daughter twirled all evening.',
    rating: 5,
  },
  {
    id: 'r2',
    name: 'Rohit S.',
    city: 'Bengaluru',
    quote: 'Instant delivery to Koramangala was a lifesaver before the birthday party.',
    rating: 5,
  },
  {
    id: 'r3',
    name: 'Meera K.',
    city: 'Delhi',
    quote: 'Cream tones feel so gentle. Sizing for ages was clear and true to fit.',
    rating: 5,
  },
  {
    id: 'r4',
    name: 'Priya N.',
    city: 'Pune',
    quote: 'Nightwear is buttery soft. We’ve already ordered a second set.',
    rating: 5,
  },
  {
    id: 'r5',
    name: 'Kabir T.',
    city: 'Hyderabad',
    quote: 'Little Gentleman Blazer looked beautiful in the family photos.',
    rating: 5,
  },
  {
    id: 'r6',
    name: 'Sana R.',
    city: 'Jaipur',
    quote: 'Love that prices are in ₹ and quality feels thoughtful, not mass-made.',
    rating: 5,
  },
  {
    id: 'r7',
    name: 'Devika P.',
    city: 'Chennai',
    quote: 'Party wear sparkled softly without being scratchy — rare find for kids.',
    rating: 5,
  },
  {
    id: 'r8',
    name: 'Arjun V.',
    city: 'Ahmedabad',
    quote: 'Delivery note was honest — near the store we got same-day, elsewhere next day.',
    rating: 4,
  },
];
