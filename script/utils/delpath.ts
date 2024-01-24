import fs from 'fs';
import { resolve } from 'path';
import { pkgPath } from './paths';
// 保留的文件
const stayFile = ['package.json', 'README.md'];

const delPath = (path: string) => {
  let files: string[] = [];

  // 是否存在文件 均用同步api
  if (fs.existsSync(path)) {
    // 读取文件或目录
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      const curPath = resolve(path, file);
      // 递归
      // 获取文件或目录的详细信息，并判断是否为文件夹
      if (fs.statSync(curPath).isDirectory()) {
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // delete
        if (!stayFile.includes(file)) {
          // 删除文件
          fs.unlinkSync(curPath);
        }
      }
    });
    // 不是改路径下，删除空的文件夹
    if (path != `${pkgPath}/mini-app`) fs.rmdirSync(path);
  }
};

export default delPath;
