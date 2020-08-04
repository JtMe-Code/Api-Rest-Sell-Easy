import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import {jwtSecret} from './key';
import {getRepository} from 'typeorm';
import {Login} from '../../entity/login.entity';

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

export default new Strategy(opts, async (payload, done) => {
  const Data = await getRepository(Login).findOne({id: payload.id});
  try {
    if (Data) {
      return done(null, Data);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});