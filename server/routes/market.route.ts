import express from 'express';

const router = express.Router();

import {
  market_get,
  market_buy_post,
  market_sell_post,
  market_sell_get,
  market_apporve_nft_get,
  market_apporve_token_get,
  market_nft_get,
} from '../controllers/market.controller';

router.get('/', market_get);
router.get('/nft', market_nft_get);
router.get('/sell', market_sell_get);
router.post('/sell', market_sell_post);
router.post('/buy', market_buy_post);
router.get('/nftapprove', market_apporve_nft_get);
router.get('/tokenapprove', market_apporve_token_get);

export default router;
