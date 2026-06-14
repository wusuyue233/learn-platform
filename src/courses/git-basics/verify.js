export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'git-1':
      check('git-commands.md', 'git init', '初始化仓库', '使用了 git init')
      check('git-commands.md', 'git add', '暂存文件', '使用了 git add')
      check('git-commands.md', 'git commit', '提交变更', '使用了 git commit')
      break
    case 'git-2':
      check('git-commands.md', 'git status', '查看状态', '使用了 git status')
      check('git-commands.md', 'git log', '查看日志', '使用了 git log')
      check('git-commands.md', 'git diff', '查看差异', '使用了 git diff')
      break
    case 'git-3':
      check('git-commands.md', 'git restore', '撤销修改', '使用了 git restore')
      check('git-commands.md', 'git stash', '暂存工作', '使用了 git stash')
      break
    case 'git-4':
      check('git-commands.md', '.gitignore', '忽略文件', '编写了 .gitignore 规则')
      break
    case 'git-5':
      check('git-commands.md', 'git branch', '创建分支', '使用了 git branch')
      check('git-commands.md', 'git checkout', '切换分支', '使用了 git checkout 或 switch')
      break
    case 'git-6':
      check('git-commands.md', 'git merge', '合并分支', '使用了 git merge')
      break
    case 'git-7':
      check('git-commands.md', 'git rebase', '变基操作', '使用了 git rebase')
      break
    case 'git-8':
      check('git-commands.md', 'git remote', '远程仓库', '使用了 git remote')
      check('git-commands.md', 'git push', '推送代码', '使用了 git push')
      check('git-commands.md', 'git pull', '拉取代码', '使用了 git pull')
      break
    case 'git-9':
      check('git-commands.md', 'git clone', '克隆仓库', '使用了 git clone')
      break
    case 'git-10':
      check('git-commands.md', 'git flow', 'Git Flow', '描述了分支策略')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}
