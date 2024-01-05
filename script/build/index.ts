import { series } from 'gulp';
import delPath from "../utils/delpath";
import { componentPath, pkgPath } from "../utils/paths";
//删除 lib
export const removeDist = () => {
  return delPath(`${componentPath}/lib`);
};

export default series(async () => removeDist());