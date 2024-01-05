import { series } from 'gulp';
import delPath from "../utils/delpath";
import { pkgPath } from "../utils/paths";
//删除easyest

export const removeDist = () => {
  return delPath(`${pkgPath}/easyest`);
};

export default series(async () => removeDist());