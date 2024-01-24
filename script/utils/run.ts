import { spawn } from 'child_process';
// 执行命令
export default async (command: string, path: string) => {
  // cmd表示命令，args 代表参数，如 rm -rf rm是命令，-rf 就是参数
  console.log(command.split(' '), 'split');
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, // 执行命令的路径
      stdio: 'inherit', // 输出共享给父进程
      shell: true // mac 不需要开启，windows 下 git base 需要开启支持
    });
    // 执行完毕关闭并resolve
    app.on('close', resolve);
    app.on('error', reject);
  });
};
