// ============================================
// CREDENTIALS
// ============================================
const VALID_USERNAME = 'trey';
const VALID_PASSWORD = 'lovetrey';

// ============================================
// STATE
// ============================================
let balance = 632847.63;
let hidden = false;
let loginAttempts = 0;
const MAX_ATTEMPTS = 3;
let currentModalType = '';
let currentFilter = 'all';
let currentYearFilter = 'all';

// ============================================
// TRANSACTION HISTORY (2024 - 2026)
// ============================================
let transactions = [
  // ===== JULY 2026 =====
  { type: 'deposit', amount: 4500.00, description: 'Salary Deposit - July', date: '2026-07-15' },
  { type: 'withdraw', amount: 250.00, description: 'Amazon Purchase', date: '2026-07-14' },
  { type: 'transfer', amount: 500.00, description: 'Transfer to Sarah Johnson', date: '2026-07-12' },
  { type: 'deposit', amount: 1200.00, description: 'Freelance Payment', date: '2026-07-10' },
  { type: 'withdraw', amount: 85.50, description: 'Restaurant - The Capital Grille', date: '2026-07-08' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2026-07-06' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2026-07-05' },
  { type: 'withdraw', amount: 320.75, description: 'Home Depot - Supplies', date: '2026-07-03' },
  { type: 'transfer', amount: 1000.00, description: 'Transfer to Michael Chen', date: '2026-07-01' },

  // ===== JUNE 2026 =====
  { type: 'deposit', amount: 4500.00, description: 'Salary Deposit - June', date: '2026-06-15' },
  { type: 'withdraw', amount: 95.00, description: 'Uber Rides', date: '2026-06-14' },
  { type: 'withdraw', amount: 150.00, description: 'Sephora - Beauty Products', date: '2026-06-12' },
  { type: 'transfer', amount: 750.00, description: 'Transfer to Emily Wilson', date: '2026-06-10' },
  { type: 'deposit', amount: 350.00, description: 'Bonus Payment', date: '2026-06-08' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2026-06-06' },
  { type: 'withdraw', amount: 210.30, description: 'Gas Station', date: '2026-06-04' },
  { type: 'deposit', amount: 150.00, description: 'Cash Deposit', date: '2026-06-02' },

  // ===== MAY 2026 =====
  { type: 'deposit', amount: 4500.00, description: 'Salary Deposit - May', date: '2026-05-15' },
  { type: 'withdraw', amount: 120.00, description: 'Apple Store - Accessories', date: '2026-05-14' },
  { type: 'transfer', amount: 2000.00, description: 'Transfer to Robert Smith', date: '2026-05-12' },
  { type: 'withdraw', amount: 65.75, description: 'Starbucks - Monthly Coffee', date: '2026-05-10' },
  { type: 'deposit', amount: 800.00, description: 'Consulting Work', date: '2026-05-08' },
  { type: 'withdraw', amount: 180.00, description: 'Zara - Clothing', date: '2026-05-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2026-05-04' },
  { type: 'deposit', amount: 300.00, description: 'Refund - Online Return', date: '2026-05-02' },

  // ===== APRIL 2026 =====
  { type: 'deposit', amount: 4500.00, description: 'Salary Deposit - April', date: '2026-04-15' },
  { type: 'withdraw', amount: 250.00, description: 'Best Buy - Electronics', date: '2026-04-14' },
  { type: 'transfer', amount: 1200.00, description: 'Transfer to Lisa Patel', date: '2026-04-12' },
  { type: 'withdraw', amount: 95.00, description: 'Uber Rides', date: '2026-04-10' },
  { type: 'deposit', amount: 600.00, description: 'Side Project Income', date: '2026-04-08' },
  { type: 'withdraw', amount: 150.00, description: 'Sushi Restaurant', date: '2026-04-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2026-04-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2026-04-02' },

  // ===== MARCH 2026 =====
  { type: 'deposit', amount: 4500.00, description: 'Salary Deposit - March', date: '2026-03-15' },
  { type: 'withdraw', amount: 300.00, description: 'Macy\'s - Shopping', date: '2026-03-14' },
  { type: 'transfer', amount: 500.00, description: 'Transfer to Anna Martinez', date: '2026-03-12' },
  { type: 'withdraw', amount: 75.00, description: 'Grubhub - Food Delivery', date: '2026-03-10' },
  { type: 'deposit', amount: 1000.00, description: 'Freelance Payment', date: '2026-03-08' },
  { type: 'withdraw', amount: 210.00, description: 'Costco - Groceries', date: '2026-03-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2026-03-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2026-03-02' },

  // ===== FEBRUARY 2026 =====
  { type: 'deposit', amount: 4500.00, description: 'Salary Deposit - February', date: '2026-02-15' },
  { type: 'withdraw', amount: 180.00, description: 'Valentine\'s Dinner', date: '2026-02-14' },
  { type: 'transfer', amount: 2000.00, description: 'Transfer to David Lee', date: '2026-02-12' },
  { type: 'withdraw', amount: 85.00, description: 'Uber Rides', date: '2026-02-10' },
  { type: 'deposit', amount: 500.00, description: 'Birthday Gift', date: '2026-02-08' },
  { type: 'withdraw', amount: 150.00, description: 'Nike - Sneakers', date: '2026-02-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2026-02-04' },
  { type: 'deposit', amount: 300.00, description: 'Cash Deposit', date: '2026-02-02' },

  // ===== JANUARY 2026 =====
  { type: 'deposit', amount: 4500.00, description: 'Salary Deposit - January', date: '2026-01-15' },
  { type: 'withdraw', amount: 200.00, description: 'New Year Dinner', date: '2026-01-14' },
  { type: 'transfer', amount: 1500.00, description: 'Transfer to Maria Garcia', date: '2026-01-12' },
  { type: 'withdraw', amount: 95.00, description: 'Gas Station', date: '2026-01-10' },
  { type: 'deposit', amount: 750.00, description: 'Holiday Bonus', date: '2026-01-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2026-01-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2026-01-04' },
  { type: 'deposit', amount: 400.00, description: 'Cash Deposit', date: '2026-01-02' },

  // ===== DECEMBER 2025 =====
  { type: 'deposit', amount: 4200.00, description: 'Salary Deposit - December', date: '2025-12-15' },
  { type: 'withdraw', amount: 500.00, description: 'Christmas Shopping', date: '2025-12-14' },
  { type: 'transfer', amount: 1000.00, description: 'Transfer to Christmas Fund', date: '2025-12-12' },
  { type: 'withdraw', amount: 150.00, description: 'Office Party', date: '2025-12-10' },
  { type: 'deposit', amount: 500.00, description: 'Year-end Bonus', date: '2025-12-08' },
  { type: 'withdraw', amount: 85.00, description: 'Uber Rides', date: '2025-12-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2025-12-04' },
  { type: 'deposit', amount: 300.00, description: 'Cash Deposit', date: '2025-12-02' },

  // ===== NOVEMBER 2025 =====
  { type: 'deposit', amount: 4200.00, description: 'Salary Deposit - November', date: '2025-11-15' },
  { type: 'withdraw', amount: 250.00, description: 'Black Friday Shopping', date: '2025-11-14' },
  { type: 'transfer', amount: 1200.00, description: 'Transfer to Savings', date: '2025-11-12' },
  { type: 'withdraw', amount: 75.00, description: 'Thanksgiving Dinner', date: '2025-11-10' },
  { type: 'deposit', amount: 350.00, description: 'Freelance Work', date: '2025-11-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2025-11-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2025-11-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2025-11-02' },

  // ===== OCTOBER 2025 =====
  { type: 'deposit', amount: 4200.00, description: 'Salary Deposit - October', date: '2025-10-15' },
  { type: 'withdraw', amount: 180.00, description: 'Halloween Costume', date: '2025-10-14' },
  { type: 'transfer', amount: 800.00, description: 'Transfer to Parents', date: '2025-10-12' },
  { type: 'withdraw', amount: 95.00, description: 'Gas Station', date: '2025-10-10' },
  { type: 'deposit', amount: 450.00, description: 'Bonus Payment', date: '2025-10-08' },
  { type: 'withdraw', amount: 150.00, description: 'Restaurant - Steakhouse', date: '2025-10-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2025-10-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2025-10-02' },

  // ===== SEPTEMBER 2025 =====
  { type: 'deposit', amount: 4200.00, description: 'Salary Deposit - September', date: '2025-09-15' },
  { type: 'withdraw', amount: 220.00, description: 'Apple Store - AirPods', date: '2025-09-14' },
  { type: 'transfer', amount: 1500.00, description: 'Transfer to Rent', date: '2025-09-12' },
  { type: 'withdraw', amount: 65.00, description: 'Uber Rides', date: '2025-09-10' },
  { type: 'deposit', amount: 600.00, description: 'Consulting Work', date: '2025-09-08' },
  { type: 'withdraw', amount: 130.00, description: 'Gym Membership', date: '2025-09-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2025-09-04' },
  { type: 'deposit', amount: 300.00, description: 'Cash Deposit', date: '2025-09-02' },

  // ===== AUGUST 2025 =====
  { type: 'deposit', amount: 4200.00, description: 'Salary Deposit - August', date: '2025-08-15' },
  { type: 'withdraw', amount: 300.00, description: 'Summer Vacation', date: '2025-08-14' },
  { type: 'transfer', amount: 2000.00, description: 'Transfer to Savings', date: '2025-08-12' },
  { type: 'withdraw', amount: 85.00, description: 'Gas Station', date: '2025-08-10' },
  { type: 'deposit', amount: 400.00, description: 'Freelance Payment', date: '2025-08-08' },
  { type: 'withdraw', amount: 160.00, description: 'Sushi Restaurant', date: '2025-08-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2025-08-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2025-08-02' },

  // ===== JULY 2025 =====
  { type: 'deposit', amount: 4000.00, description: 'Salary Deposit - July', date: '2025-07-15' },
  { type: 'withdraw', amount: 180.00, description: 'Independence Day BBQ', date: '2025-07-14' },
  { type: 'transfer', amount: 1000.00, description: 'Transfer to Emergency Fund', date: '2025-07-12' },
  { type: 'withdraw', amount: 75.00, description: 'Uber Rides', date: '2025-07-10' },
  { type: 'deposit', amount: 350.00, description: 'Bonus Payment', date: '2025-07-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2025-07-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2025-07-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2025-07-02' },

  // ===== JUNE 2025 =====
  { type: 'deposit', amount: 4000.00, description: 'Salary Deposit - June', date: '2025-06-15' },
  { type: 'withdraw', amount: 200.00, description: 'Amazon - Electronics', date: '2025-06-14' },
  { type: 'transfer', amount: 800.00, description: 'Transfer to Parents', date: '2025-06-12' },
  { type: 'withdraw', amount: 95.00, description: 'Gas Station', date: '2025-06-10' },
  { type: 'deposit', amount: 450.00, description: 'Consulting Work', date: '2025-06-08' },
  { type: 'withdraw', amount: 150.00, description: 'Restaurant - Italian', date: '2025-06-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2025-06-04' },
  { type: 'deposit', amount: 300.00, description: 'Cash Deposit', date: '2025-06-02' },

  // ===== MAY 2025 =====
  { type: 'deposit', amount: 4000.00, description: 'Salary Deposit - May', date: '2025-05-15' },
  { type: 'withdraw', amount: 250.00, description: 'Mother\'s Day Gift', date: '2025-05-14' },
  { type: 'transfer', amount: 1200.00, description: 'Transfer to Savings', date: '2025-05-12' },
  { type: 'withdraw', amount: 65.00, description: 'Uber Rides', date: '2025-05-10' },
  { type: 'deposit', amount: 500.00, description: 'Freelance Work', date: '2025-05-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2025-05-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2025-05-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2025-05-02' },

  // ===== APRIL 2025 =====
  { type: 'deposit', amount: 4000.00, description: 'Salary Deposit - April', date: '2025-04-15' },
  { type: 'withdraw', amount: 180.00, description: 'Spring Shopping', date: '2025-04-14' },
  { type: 'transfer', amount: 1500.00, description: 'Transfer to Rent', date: '2025-04-12' },
  { type: 'withdraw', amount: 85.00, description: 'Gas Station', date: '2025-04-10' },
  { type: 'deposit', amount: 350.00, description: 'Bonus Payment', date: '2025-04-08' },
  { type: 'withdraw', amount: 140.00, description: 'Sushi Restaurant', date: '2025-04-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2025-04-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2025-04-02' },

  // ===== MARCH 2025 =====
  { type: 'deposit', amount: 4000.00, description: 'Salary Deposit - March', date: '2025-03-15' },
  { type: 'withdraw', amount: 300.00, description: 'Amazon - Laptop', date: '2025-03-14' },
  { type: 'transfer', amount: 1000.00, description: 'Transfer to Emergency Fund', date: '2025-03-12' },
  { type: 'withdraw', amount: 75.00, description: 'Uber Rides', date: '2025-03-10' },
  { type: 'deposit', amount: 400.00, description: 'Consulting Work', date: '2025-03-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2025-03-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2025-03-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2025-03-02' },

  // ===== FEBRUARY 2025 =====
  { type: 'deposit', amount: 4000.00, description: 'Salary Deposit - February', date: '2025-02-15' },
  { type: 'withdraw', amount: 180.00, description: 'Valentine\'s Dinner', date: '2025-02-14' },
  { type: 'transfer', amount: 800.00, description: 'Transfer to Parents', date: '2025-02-12' },
  { type: 'withdraw', amount: 95.00, description: 'Gas Station', date: '2025-02-10' },
  { type: 'deposit', amount: 450.00, description: 'Freelance Work', date: '2025-02-08' },
  { type: 'withdraw', amount: 150.00, description: 'Restaurant - French', date: '2025-02-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2025-02-04' },
  { type: 'deposit', amount: 300.00, description: 'Cash Deposit', date: '2025-02-02' },

  // ===== JANUARY 2025 =====
  { type: 'deposit', amount: 4000.00, description: 'Salary Deposit - January', date: '2025-01-15' },
  { type: 'withdraw', amount: 200.00, description: 'New Year Shopping', date: '2025-01-14' },
  { type: 'transfer', amount: 1200.00, description: 'Transfer to Savings', date: '2025-01-12' },
  { type: 'withdraw', amount: 65.00, description: 'Uber Rides', date: '2025-01-10' },
  { type: 'deposit', amount: 500.00, description: 'Holiday Bonus', date: '2025-01-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2025-01-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2025-01-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2025-01-02' },

  // ===== DECEMBER 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - December', date: '2024-12-15' },
  { type: 'withdraw', amount: 450.00, description: 'Christmas Shopping', date: '2024-12-14' },
  { type: 'transfer', amount: 1000.00, description: 'Transfer to Christmas Fund', date: '2024-12-12' },
  { type: 'withdraw', amount: 150.00, description: 'Office Party', date: '2024-12-10' },
  { type: 'deposit', amount: 400.00, description: 'Year-end Bonus', date: '2024-12-08' },
  { type: 'withdraw', amount: 85.00, description: 'Uber Rides', date: '2024-12-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2024-12-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2024-12-02' },

  // ===== NOVEMBER 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - November', date: '2024-11-15' },
  { type: 'withdraw', amount: 250.00, description: 'Black Friday Shopping', date: '2024-11-14' },
  { type: 'transfer', amount: 800.00, description: 'Transfer to Savings', date: '2024-11-12' },
  { type: 'withdraw', amount: 75.00, description: 'Thanksgiving Dinner', date: '2024-11-10' },
  { type: 'deposit', amount: 350.00, description: 'Freelance Work', date: '2024-11-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2024-11-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2024-11-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2024-11-02' },

  // ===== OCTOBER 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - October', date: '2024-10-15' },
  { type: 'withdraw', amount: 180.00, description: 'Halloween Costume', date: '2024-10-14' },
  { type: 'transfer', amount: 700.00, description: 'Transfer to Parents', date: '2024-10-12' },
  { type: 'withdraw', amount: 95.00, description: 'Gas Station', date: '2024-10-10' },
  { type: 'deposit', amount: 300.00, description: 'Bonus Payment', date: '2024-10-08' },
  { type: 'withdraw', amount: 150.00, description: 'Restaurant - Italian', date: '2024-10-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2024-10-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2024-10-02' },

  // ===== SEPTEMBER 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - September', date: '2024-09-15' },
  { type: 'withdraw', amount: 220.00, description: 'Apple Store - AirPods', date: '2024-09-14' },
  { type: 'transfer', amount: 1000.00, description: 'Transfer to Rent', date: '2024-09-12' },
  { type: 'withdraw', amount: 65.00, description: 'Uber Rides', date: '2024-09-10' },
  { type: 'deposit', amount: 450.00, description: 'Consulting Work', date: '2024-09-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2024-09-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2024-09-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2024-09-02' },

  // ===== AUGUST 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - August', date: '2024-08-15' },
  { type: 'withdraw', amount: 280.00, description: 'Summer Vacation', date: '2024-08-14' },
  { type: 'transfer', amount: 1200.00, description: 'Transfer to Savings', date: '2024-08-12' },
  { type: 'withdraw', amount: 85.00, description: 'Gas Station', date: '2024-08-10' },
  { type: 'deposit', amount: 400.00, description: 'Freelance Work', date: '2024-08-08' },
  { type: 'withdraw', amount: 160.00, description: 'Sushi Restaurant', date: '2024-08-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2024-08-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2024-08-02' },

  // ===== JULY 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - July', date: '2024-07-15' },
  { type: 'withdraw', amount: 180.00, description: 'Independence Day BBQ', date: '2024-07-14' },
  { type: 'transfer', amount: 800.00, description: 'Transfer to Emergency Fund', date: '2024-07-12' },
  { type: 'withdraw', amount: 75.00, description: 'Uber Rides', date: '2024-07-10' },
  { type: 'deposit', amount: 350.00, description: 'Bonus Payment', date: '2024-07-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2024-07-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2024-07-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2024-07-02' },

  // ===== JUNE 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - June', date: '2024-06-15' },
  { type: 'withdraw', amount: 200.00, description: 'Amazon - Electronics', date: '2024-06-14' },
  { type: 'transfer', amount: 700.00, description: 'Transfer to Parents', date: '2024-06-12' },
  { type: 'withdraw', amount: 95.00, description: 'Gas Station', date: '2024-06-10' },
  { type: 'deposit', amount: 450.00, description: 'Consulting Work', date: '2024-06-08' },
  { type: 'withdraw', amount: 150.00, description: 'Restaurant - French', date: '2024-06-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2024-06-04' },
  { type: 'deposit', amount: 300.00, description: 'Cash Deposit', date: '2024-06-02' },

  // ===== MAY 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - May', date: '2024-05-15' },
  { type: 'withdraw', amount: 250.00, description: 'Mother\'s Day Gift', date: '2024-05-14' },
  { type: 'transfer', amount: 900.00, description: 'Transfer to Savings', date: '2024-05-12' },
  { type: 'withdraw', amount: 65.00, description: 'Uber Rides', date: '2024-05-10' },
  { type: 'deposit', amount: 350.00, description: 'Freelance Work', date: '2024-05-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2024-05-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2024-05-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2024-05-02' },

  // ===== APRIL 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - April', date: '2024-04-15' },
  { type: 'withdraw', amount: 180.00, description: 'Spring Shopping', date: '2024-04-14' },
  { type: 'transfer', amount: 1000.00, description: 'Transfer to Rent', date: '2024-04-12' },
  { type: 'withdraw', amount: 85.00, description: 'Gas Station', date: '2024-04-10' },
  { type: 'deposit', amount: 350.00, description: 'Bonus Payment', date: '2024-04-08' },
  { type: 'withdraw', amount: 140.00, description: 'Restaurant - Steakhouse', date: '2024-04-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2024-04-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2024-04-02' },

  // ===== MARCH 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - March', date: '2024-03-15' },
  { type: 'withdraw', amount: 300.00, description: 'Amazon - Laptop', date: '2024-03-14' },
  { type: 'transfer', amount: 800.00, description: 'Transfer to Emergency Fund', date: '2024-03-12' },
  { type: 'withdraw', amount: 75.00, description: 'Uber Rides', date: '2024-03-10' },
  { type: 'deposit', amount: 400.00, description: 'Consulting Work', date: '2024-03-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2024-03-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2024-03-04' },
  { type: 'deposit', amount: 200.00, description: 'Cash Deposit', date: '2024-03-02' },

  // ===== FEBRUARY 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - February', date: '2024-02-15' },
  { type: 'withdraw', amount: 180.00, description: 'Valentine\'s Dinner', date: '2024-02-14' },
  { type: 'transfer', amount: 700.00, description: 'Transfer to Parents', date: '2024-02-12' },
  { type: 'withdraw', amount: 95.00, description: 'Gas Station', date: '2024-02-10' },
  { type: 'deposit', amount: 450.00, description: 'Freelance Work', date: '2024-02-08' },
  { type: 'withdraw', amount: 150.00, description: 'Restaurant - Italian', date: '2024-02-06' },
  { type: 'withdraw', amount: 45.00, description: 'Netflix Subscription', date: '2024-02-04' },
  { type: 'deposit', amount: 300.00, description: 'Cash Deposit', date: '2024-02-02' },

  // ===== JANUARY 2024 =====
  { type: 'deposit', amount: 3800.00, description: 'Salary Deposit - January', date: '2024-01-15' },
  { type: 'withdraw', amount: 200.00, description: 'New Year Shopping', date: '2024-01-14' },
  { type: 'transfer', amount: 1000.00, description: 'Transfer to Savings', date: '2024-01-12' },
  { type: 'withdraw', amount: 65.00, description: 'Uber Rides', date: '2024-01-10' },
  { type: 'deposit', amount: 400.00, description: 'Holiday Bonus', date: '2024-01-08' },
  { type: 'withdraw', amount: 120.00, description: 'Gym Membership', date: '2024-01-06' },
  { type: 'withdraw', amount: 45.00, description: 'Spotify Premium', date: '2024-01-04' },
  { type: 'deposit', amount: 250.00, description: 'Cash Deposit', date: '2024-01-02' }
];

// ============================================
// LOGIN FUNCTIONALITY
// ============================================
function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorEl = document.getElementById('errorMessage');

  if (loginAttempts >= MAX_ATTEMPTS) {
    errorEl.textContent = '🔒 Account locked. Please contact support.';
    errorEl.style.color = '#ff4444';
    return;
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    errorEl.textContent = '';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboardPage').style.display = 'block';
    
    const now = new Date();
    const timeString = now.toLocaleString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit'
    });
    document.getElementById('lastLogin').textContent = timeString;

    loginAttempts = 0;
    updateBalanceDisplay();
    renderTransactions();
    renderFullTransactions();
    updateStats();
  } else {
    loginAttempts++;
    const remaining = MAX_ATTEMPTS - loginAttempts;
    errorEl.textContent = `❌ Invalid credentials. ${remaining} attempt(s) remaining.`;
    errorEl.style.color = '#ff7b7b';
    document.getElementById('password').value = '';

    if (loginAttempts >= MAX_ATTEMPTS) {
      errorEl.textContent = '🔒 Account locked. Please contact support.';
      errorEl.style.color = '#ff4444';
      document.getElementById('username').disabled = true;
      document.getElementById('password').disabled = true;
    }
  }
}

// ============================================
// DASHBOARD FUNCTIONS
// ============================================
function toggleHide() {
  const el = document.getElementById('balanceDisplay');
  const elMain = document.getElementById('balanceDisplayMain');
  const icon = document.getElementById('hideIcon');
  
  hidden = !hidden;
  if (hidden) {
    el.innerText = '••••••••';
    elMain.innerText = '••••••••';
    icon.className = 'fas fa-eye-slash';
  } else {
    updateBalanceDisplay();
    icon.className = 'fas fa-eye';
  }
}

function updateBalanceDisplay() {
  const formatted = '$' + balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  document.getElementById('balanceDisplay').innerText = formatted;
  document.getElementById('balanceDisplayMain').innerText = formatted;
}

function updateStats() {
  let totalDeposits = 0;
  let totalWithdrawals = 0;
  let totalTransfers = 0;
  
  transactions.forEach(t => {
    if (t.type === 'deposit') totalDeposits += t.amount;
    else if (t.type === 'withdraw') totalWithdrawals += t.amount;
    else if (t.type === 'transfer') totalTransfers += t.amount;
  });
  
  document.getElementById('totalDeposits').innerText = '$' + totalDeposits.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  document.getElementById('totalWithdrawals').innerText = '$' + totalWithdrawals.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  document.getElementById('totalTransfers').innerText = '$' + totalTransfers.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ============================================
// TRANSACTION FUNCTIONS
// ============================================
function addTransaction(type, amount, description) {
  const today = new Date();
  const date = today.toISOString().split('T')[0];
  
  const transaction = {
    type: type,
    amount: amount,
    description: description,
    date: date
  };
  
  transactions.unshift(transaction);
  renderTransactions();
  renderFullTransactions();
  updateStats();
  updateBalanceDisplay();
}

function renderTransactions() {
  const container = document.getElementById('transactionList');
  container.innerHTML = '';
  
  const recent = transactions.slice(0, 5);
  
  recent.forEach(t => {
    const div = document.createElement('div');
    div.className = 'transaction-item';
    
    const iconClass = t.type;
    const iconMap = {
      'deposit': 'fa-arrow-down',
      'withdraw': 'fa-arrow-up',
      'transfer': 'fa-exchange-alt'
    };
    
    const amountClass = t.type === 'deposit' ? 'positive' : 'negative';
    const sign = t.type === 'deposit' ? '+' : '-';
    const date = new Date(t.date);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    
    div.innerHTML = `
      <div class="transaction-left">
        <div class="transaction-icon ${iconClass}">
          <i class="fas ${iconMap[t.type]}"></i>
        </div>
        <div class="transaction-details">
          <div class="transaction-desc">${t.description}</div>
          <div class="transaction-date">${dateStr}</div>
        </div>
      </div>
      <div class="transaction-amount ${amountClass}">
        ${sign}$${t.amount.toFixed(2)}
      </div>
    `;
    container.appendChild(div);
  });
}

function renderFullTransactions() {
  const container = document.getElementById('fullTransactionList');
  container.innerHTML = '';
  
  let filtered = [...transactions];
  
  // Filter by type
  if (currentFilter !== 'all') {
    filtered = filtered.filter(t => t.type === currentFilter);
  }
  
  // Filter by year
  if (currentYearFilter !== 'all') {
    filtered = filtered.filter(t => t.date.startsWith(currentYearFilter));
  }
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #888;">
        <i class="fas fa-inbox" style="font-size: 48px; display: block; margin-bottom: 10px;"></i>
        No transactions found
      </div>
    `;
    return;
  }
  
  filtered.forEach(t => {
    const div = document.createElement('div');
    div.className = 'transaction-item';
    
    const iconClass = t.type;
    const iconMap = {
      'deposit': 'fa-arrow-down',
      'withdraw': 'fa-arrow-up',
      'transfer': 'fa-exchange-alt'
    };
    
    const amountClass = t.type === 'deposit' ? 'positive' : 'negative';
    const sign = t.type === 'deposit' ? '+' : '-';
    const date = new Date(t.date);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    div.innerHTML = `
      <div class="transaction-left">
        <div class="transaction-icon ${iconClass}">
          <i class="fas ${iconMap[t.type]}"></i>
        </div>
        <div class="transaction-details">
          <div class="transaction-desc">${t.description}</div>
          <div class="transaction-date">${dateStr}</div>
        </div>
      </div>
      <div class="transaction-amount ${amountClass}">
        ${sign}$${t.amount.toFixed(2)}
      </div>
    `;
    container.appendChild(div);
  });
}

function filterTransactions() {
  currentFilter = document.getElementById('filterType').value;
  currentYearFilter = document.getElementById('filterYear').value;
  renderFullTransactions();
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function openModal(type) {
  currentModalType = type;
  const overlay = document.getElementById('modalOverlay');
  const title = document.getElementById('modalTitle');
  const fields = document.getElementById('modalFields');
  const submitBtn = document.getElementById('modalSubmitBtn');
  const message = document.getElementById('modalMessage');
  
  message.textContent = '';
  message.className = 'modal-message';
  
  let html = '';
  
  if (type === 'deposit') {
    title.textContent = '💰 Deposit Funds';
    submitBtn.textContent = 'Deposit';
    html = `
      <div class="input-group">
        <label for="depositAmount">Amount ($)</label>
        <input type="number" id="depositAmount" placeholder="Enter amount to deposit" min="0.01" step="0.01" required />
      </div>
      <div class="input-group">
        <label for="depositDesc">Description (optional)</label>
        <input type="text" id="depositDesc" placeholder="e.g., Cash deposit" />
      </div>
    `;
  } else if (type === 'withdraw') {
    title.textContent = '🏦 Withdraw Funds';
    submitBtn.textContent = 'Withdraw';
    html = `
      <div class="input-group">
        <label for="withdrawAmount">Amount ($)</label>
        <input type="number" id="withdrawAmount" placeholder="Enter amount to withdraw" min="0.01" step="0.01" required />
      </div>
      <div class="input-group">
        <label for="withdrawDesc">Description (optional)</label>
        <input type="text" id="withdrawDesc" placeholder="e.g., ATM withdrawal" />
      </div>
    `;
  } else if (type === 'transfer') {
    title.textContent = '💸 Transfer Money';
    submitBtn.textContent = 'Transfer';
    html = `
      <div class="input-group">
        <label for="transferRecipient">Recipient Account</label>
        <input type="text" id="transferRecipient" placeholder="Enter account number or name" required />
      </div>
      <div class="input-group">
        <label for="transferAmount">Amount ($)</label>
        <input type="number" id="transferAmount" placeholder="Enter amount to transfer" min="0.01" step="0.01" required />
      </div>
      <div class="input-group">
        <label for="transferDesc">Description (optional)</label>
        <input type="text" id="transferDesc" placeholder="e.g., Rent payment" />
      </div>
    `;
  }
  
  fields.innerHTML = html;
  overlay.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  document.getElementById('modalMessage').textContent = '';
  document.getElementById('modalMessage').className = 'modal-message';
}

function handleTransaction(event) {
  event.preventDefault();
  const message = document.getElementById('modalMessage');
  let amount, description, recipient;
  
  try {
    if (currentModalType === 'deposit') {
      amount = parseFloat(document.getElementById('depositAmount').value);
      description = document.getElementById('depositDesc').value.trim() || 'Deposit';
      
      if (!amount || amount <= 0) {
        throw new Error('Please enter a valid amount.');
      }
      
      balance += amount;
      addTransaction('deposit', amount, description);
      message.textContent = `✅ Successfully deposited $${amount.toFixed(2)}`;
      message.className = 'modal-message success';
      
    } else if (currentModalType === 'withdraw') {
      amount = parseFloat(document.getElementById('withdrawAmount').value);
      description = document.getElementById('withdrawDesc').value.trim() || 'Withdrawal';
      
      if (!amount || amount <= 0) {
        throw new Error('Please enter a valid amount.');
      }
      
      if (amount > balance) {
        throw new Error('Insufficient funds. Please enter a lower amount.');
      }
      
      balance -= amount;
      addTransaction('withdraw', amount, description);
      message.textContent = `✅ Successfully withdrew $${amount.toFixed(2)}`;
      message.className = 'modal-message success';
      
    } else if (currentModalType === 'transfer') {
      recipient = document.getElementById('transferRecipient').value.trim();
      amount = parseFloat(document.getElementById('transferAmount').value);
      description = document.getElementById('transferDesc').value.trim() || 'Transfer';
      
      if (!recipient) {
        throw new Error('Please enter a recipient account.');
      }
      
      if (!amount || amount <= 0) {
        throw new Error('Please enter a valid amount.');
      }
      
      if (amount > balance) {
        throw new Error('Insufficient funds. Please enter a lower amount.');
      }
      
      balance -= amount;
      addTransaction('transfer', amount, `Transfer to ${recipient} - ${description}`);
      message.textContent = `✅ Successfully transferred $${amount.toFixed(2)} to ${recipient}`;
      message.className = 'modal-message success';
    }
    
    setTimeout(() => {
      closeModal();
    }, 2000);
    
  } catch (error) {
    message.textContent = `❌ ${error.message}`;
    message.className = 'modal-message error';
  }
}

// ============================================
// TRANSFER FORM FUNCTION
// ============================================
function handleTransferForm(event) {
  event.preventDefault();
  
  const recipient = document.getElementById('transferRecipientForm').value.trim();
  const amount = parseFloat(document.getElementById('transferAmountForm').value);
  const description = document.getElementById('transferDescForm').value.trim() || 'Transfer';
  
  if (!recipient) {
    alert('Please enter a recipient.');
    return;
  }
  
  if (!amount || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }
  
  if (amount > balance) {
    alert('Insufficient funds. Please enter a lower amount.');
    return;
  }
  
  balance -= amount;
  addTransaction('transfer', amount, `Transfer to ${recipient} - ${description}`);
  document.getElementById('transferRecipientForm').value = '';
  document.getElementById('transferAmountForm').value = '';
  document.getElementById('transferDescForm').value = '';
  
  alert(`✅ Successfully transferred $${amount.toFixed(2)} to ${recipient}`);
}

// ============================================
// NAVIGATION
// ============================================
function switchPage(page) {
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(s => {
    s.classList.remove('active-section');
  });
  
  // Show selected section
  const sectionMap = {
    'dashboard': 'dashboardSection',
    'transactions': 'transactionsSection',
    'transfer': 'transferSection',
    'profile': 'profileSection'
  };
  
  document.getElementById(sectionMap[page]).classList.add('active-section');
  
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
}

// Nav link click handlers
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    switchPage(this.dataset.page);
  });
});

function toggleMobileNav() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

// ============================================
// DOWNLOAD STATEMENT
// ============================================
function downloadStatement() {
  let csv = 'Date,Type,Description,Amount\n';
  transactions.forEach(t => {
    const sign = t.type === 'deposit' ? '+' : '-';
    csv += `${t.date},${t.type},${t.description},${sign}$${t.amount.toFixed(2)}\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `statement_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
}

// ============================================
// LOGOUT
// ============================================
function handleLogout() {
  if (confirm('Are you sure you want to logout?')) {
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
    
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('username').disabled = false;
    document.getElementById('password').disabled = false;
    document.getElementById('errorMessage').textContent = '';
    
    loginAttempts = 0;
    closeModal();
  }
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
  
  if (event.key === 'Enter') {
    const loginPage = document.getElementById('loginPage');
    if (loginPage.style.display !== 'none') {
      handleLogin(event);
    }
  }
});

// ============================================
// CLOSE MODAL ON OVERLAY CLICK
// ============================================
document.getElementById('modalOverlay').addEventListener('click', function(event) {
  if (event.target === this) {
    closeModal();
  }
});

// ============================================
// INITIALIZE
// ============================================
updateBalanceDisplay();
renderTransactions();
renderFullTransactions();
updateStats();

console.log('🔐 SecureBank Demo');
console.log('📝 Use username: admin | password: password123');
console.log('💰 Features: Deposit, Withdraw, Transfer');
console.log('📊 Transaction History: 2024 - 2026');
console.log('📈 Total Transactions: ' + transactions.length);




// ============================================
// PROFILE PICTURE UPLOAD
// ============================================

function uploadProfilePicture(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  // Check if it's an image
  if (!file.type.startsWith('image/')) {
    alert('Please select an image file.');
    return;
  }
  
  // Check file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    alert('Image size should be less than 5MB.');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    // Update the profile picture
    const img = document.querySelector('.profile-avatar img');
    img.src = e.target.result;
    
    // Save to localStorage (optional - for persistence)
    try {
      localStorage.setItem('profilePicture', e.target.result);
    } catch (error) {
      console.log('Could not save to localStorage');
    }
    
    // Show success message
    showNotification('Profile picture updated successfully! ✅');
  };
  reader.readAsDataURL(file);
}

// Load saved profile picture (optional - for persistence)
function loadSavedProfilePicture() {
  try {
    const savedImage = localStorage.getItem('profilePicture');
    if (savedImage) {
      const img = document.querySelector('.profile-avatar img');
      img.src = savedImage;
    }
  } catch (error) {
    console.log('Could not load saved image');
  }
}

// Simple notification function
function showNotification(message) {
  const existing = document.querySelector('.profile-notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = 'profile-notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2e7d32;
    color: white;
    padding: 15px 25px;
    border-radius: 12px;
    font-weight: 600;
    z-index: 9999;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    animation: slideInRight 0.3s ease;
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add animation for notification
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Call this in your initialization
// loadSavedProfilePicture();