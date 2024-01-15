import { dest, parallel, series, src } from 'gulp';
import delPath from "../utils/delpath";
import { componentPath, pkgPath } from "../utils/paths";
import less from 'gulp-less';
import autoPrefixer from 'gulp-autoprefixer';
import run from '../utils/run';
//删除 products 下的打包文件
export const removeDist = () => {
  return delPath(`${componentPath}/products`);
};

// 打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
  .pipe(less())
  .pipe(autoPrefixer())
  .pipe(dest(`${pkgPath}/mini-app/products/lib/src`))
  .pipe(dest(`${pkgPath}/mini-app/products/es/src`))
}

// 打包组件
export const buildComponent = async () => {
  await run('pnpm run build', componentPath)

}

exports.default = series(
  async () => removeDist(),
  async () => buildComponent(),
  async () => buildStyle()
);