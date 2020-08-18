import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import {JWT_SECRET} from './key';
import {getRepository} from 'typeorm';
import {Login} from '../../entity/login.entity';

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

export default new Strategy(opts, async (payload, done) => {
  const DATA = await getRepository(Login).findOne({id: payload.id});
  try {
    if (DATA) {
      return done(null, DATA);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});