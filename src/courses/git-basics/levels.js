export const phases = [
  {
    id: 'git-basics',
    name: '阶段一：基础操作',
    description: '掌握 Git 初始化、暂存、提交等基础命令',
    levels: [
      {
        id: 'git-1',
        number: 1,
        title: 'git init / add / commit',
        concept: '初始化与提交',
        difficulty: 'easy',
        task: '初始化一个 Git 仓库，暂存文件并提交',
        prerequisites: `<h4>🔀 Git 是什么</h4>
<p>Git 是分布式版本控制系统，跟踪文件的每一次修改。</p>

<h4>🔑 基本工作流</h4>
<pre><code>git init              # 初始化仓库
git add file.txt      # 暂存文件
git commit -m "msg"   # 提交到本地仓库
</code></pre>

<ul>
  <li><code>工作区</code> — 你编辑文件的地方</li>
  <li><code>暂存区（Index）</code> — 准备提交的快照</li>
  <li><code>本地仓库</code> — 提交历史记录</li>
</ul>`,
        conceptDetail: `步骤 1 — 初始化仓库
[git init](在当前目录创建 .git 隐藏文件夹) 把目录变成 Git 仓库。

步骤 2 — 暂存文件
[git add](将文件添加到暂存区) 准备提交快照。

步骤 3 — 提交变更
[git commit -m "message"](提交暂存区内容到本地仓库) 保存历史。`,
        contextCode: `# Git 基本操作参考

# 初始化仓库
git init

# 暂存单个文件
git add index.html

# 暂存所有文件
git add .

# 暂存指定类型的文件
git add "*.js"

# 提交
git commit -m "feat: 初始化项目"
git commit -am "msg"  # 暂存+提交（已跟踪文件）`,
        starterCode: `# 记录以下 Git 操作的完整命令：

# 1. 在当前目录初始化 Git 仓库


# 2. 暂存所有文件


# 3. 提交，消息为 "init: 初始化项目"

`,
        hints: [
          'git init 初始化仓库',
          'git add . 暂存所有文件',
          'git commit -m "消息" 提交'
        ],
        code: `# 1. 初始化仓库
git init

# 2. 暂存所有文件
git add .

# 3. 提交
git commit -m "init: 初始化项目"`,
        verification: '包含了 init、add、commit 三个命令',
        filePath: 'git-commands.md',
        cognitiveLoad: 'low',
        dependsOn: [],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '初始化仓库',
          'verification': 'git init',
          'hint': '用 git init 初始化一个新仓库'
         },
         {
          'id': 'step-2',
          'title': '暂存文件',
          'verification': 'git add',
          'hint': '用 git add 将文件加入暂存区'
         },
         {
          'id': 'step-3',
          'title': '提交更改',
          'verification': 'git commit',
          'hint': '用 git commit 提交暂存内容'
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'git-2',
        number: 2,
        title: 'git status / log / diff',
        concept: '查看状态与历史',
        difficulty: 'easy',
        task: '使用 Git 命令查看仓库状态、提交历史和文件差异',
        prerequisites: `<h4>🔀 查看状态</h4>
<pre><code>git status              # 查看工作区状态
git status -s           # 简洁模式
</code></pre>

<h4>🔀 查看历史</h4>
<pre><code>git log                 # 完整日志
git log --oneline       # 简洁日志
git log -5              # 最近 5 条
</code></pre>

<h4>🔀 查看差异</h4>
<pre><code>git diff                # 工作区 vs 暂存区
git diff --staged       # 暂存区 vs 最新提交
</code></pre>`,
        conceptDetail: `步骤 1 — git status 查看状态
显示哪些文件已修改、已暂存、未跟踪。

步骤 2 — git log 查看提交历史
每次提交显示作者、时间、消息。

步骤 3 — git diff 查看差异
对比工作区、暂存区、仓库的文件变化。`,
        contextCode: `# 查看状态
git status
git status -s            # 简洁模式：M=修改, A=新增, ??=未跟踪

# 查看日志
git log
git log --oneline        # 一行显示
git log --graph          # 图形化显示分支
git log -5               # 最近 5 条
git log --author="name"  # 按作者过滤

# 查看差异
git diff                 # 未暂存的修改
git diff --staged        # 已暂存的修改
git diff HEAD            # 与最新提交对比
git diff main..feature   # 分支间差异`,
        starterCode: `# 记录以下 Git 查看命令：

# 1. 查看当前仓库状态


# 2. 用简洁模式查看状态


# 3. 查看最近 3 条提交日志


# 4. 查看已暂存文件的差异

`,
        hints: [
          'git status 查看状态',
          'git status -s 简洁模式',
          'git log -3 最近 3 条',
          'git diff --staged 查看暂存差异'
        ],
        code: `# 1. 查看状态
git status

# 2. 简洁模式
git status -s

# 3. 最近日志
git log -3

# 4. 暂存区差异
git diff --staged`,
        verification: '包含了 status、log、diff 命令',
        filePath: 'git-commands.md',
        cognitiveLoad: 'low',
        dependsOn: ['git-1'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '查看状态',
          'verification': 'git status',
          'hint': '用 git status 查看仓库状态'
         },
         {
          'id': 'step-2',
          'title': '查看历史',
          'verification': 'git log',
          'hint': '用 git log 查看提交历史'
         },
         {
          'id': 'step-3',
          'title': '查看差异',
          'verification': 'git diff',
          'hint': '用 git diff 查看文件修改内容'
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'git-3',
        number: 3,
        title: 'git restore / stash',
        concept: '撤销与暂存',
        difficulty: 'medium',
        task: '撤销未暂存的修改，并临时保存工作进度',
        prerequisites: `<h4>🔀 撤销修改</h4>
<pre><code>git restore file.txt           # 撤销工作区修改
git restore --staged file.txt  # 取消暂存
</code></pre>

<h4>🔀 暂存工作</h4>
<pre><code>git stash                # 暂存所有修改
git stash pop            # 恢复暂存
git stash list           # 查看暂存列表
</code></pre>

<h4>🔑 使用场景</h4>
<ul>
  <li>改错代码想恢复 → git restore</li>
  <li>写了一半要切换分支 → git stash</li>
</ul>`,
        conceptDetail: `步骤 1 — git restore 撤销修改
[git restore](恢复文件到指定状态) 可以撤销工作区或暂存区的修改。

步骤 2 — git stash 临时保存
[git stash](将工作区修改压入栈中) 临时保存修改。

步骤 3 — git stash pop 恢复
[git stash pop](弹出最近一次暂存) 恢复之前保存的修改。`,
        contextCode: `# 撤销修改
git restore file.txt            # 丢弃工作区修改
git restore --staged file.txt   # 取消暂存（保留修改）

# 暂存工作
git stash                       # 暂存所有修改
git stash push -m "描述"        # 带描述的暂存
git stash list                  # 查看暂存列表
git stash pop                   # 恢复最近一次
git stash apply stash@{1}       # 恢复指定暂存
git stash drop                  # 删除最近一次暂存

# 注意
# git restore --staged 后文件仍在工作区
# git restore 后修改直接丢失，不可恢复`,
        starterCode: `# 记录以下撤销和暂存命令：

# 1. 撤销 file.txt 的工作区修改


# 2. 取消 file.txt 的暂存


# 3. 暂存当前所有修改


# 4. 查看暂存列表


# 5. 恢复最近一次暂存

`,
        hints: [
          'git restore file.txt 撤销修改',
          'git restore --staged 取消暂存',
          'git stash 暂存修改',
          'git stash pop 恢复'
        ],
        code: `# 1. 撤销工作区修改
git restore file.txt

# 2. 取消暂存
git restore --staged file.txt

# 3. 暂存修改
git stash

# 4. 查看暂存列表
git stash list

# 5. 恢复暂存
git stash pop`,
        verification: '包含了 restore 和 stash 命令',
        filePath: 'git-commands.md',
        cognitiveLoad: 'medium',
        dependsOn: ['git-2'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '撤销修改',
          'verification': 'git restore',
          'hint': '用 git restore 撤销工作区修改'
         },
         {
          'id': 'step-2',
          'title': '暂存进度',
          'verification': 'git stash',
          'hint': '用 git stash 临时保存工作进度'
         },
         {
          'id': 'step-3',
          'title': '恢复进度',
          'verification': 'git stash pop',
          'hint': '用 git stash pop 恢复暂存工作'
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'git-4',
        number: 4,
        title: '.gitignore 忽略文件',
        concept: '忽略规则',
        difficulty: 'easy',
        task: '编写 .gitignore 忽略 node_modules 和 .env 文件',
        prerequisites: `<h4>🔀 .gitignore</h4>
<p>.gitignore 告诉 Git 哪些文件不要跟踪：</p>
<pre><code># 这是注释
node_modules/
.env
*.log
</code></pre>

<h4>🔑 忽略规则</h4>
<ul>
  <li>写文件名或目录名</li>
  <li><code>*</code> 通配符匹配任意字符</li>
  <li><code>!</code> 取反，不忽略</li>
  <li><code>/</code> 结尾忽略整个目录</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 .gitignore 文件
在项目根目录创建 .gitignore。

步骤 2 — 写忽略规则
每行一个规则，# 开头是注释。

步骤 3 — 常见忽略项
node_modules、.env、日志文件、IDE 配置等。`,
        contextCode: `# .gitignore 常用规则

# 依赖目录
node_modules/
vendor/
__pycache__/

# 环境变量
.env
.env.local

# 构建产物
dist/
build/
*.pyc

# 日志
*.log
logs/

# IDE
.vscode/
.idea/
*.swp

# 操作系统
.DS_Store
Thumbs.db

# 取反：不忽略 README
!important/README.md`,
        starterCode: `# 编写 .gitignore，忽略以下内容：
# 1. node_modules 目录
# 2. .env 文件
# 3. 所有 .log 日志文件
# 4. dist 构建目录

`,
        hints: [
          'node_modules/ 忽略整个目录',
          '.env 忽略特定文件',
          '*.log 忽略所有 .log 文件',
          'dist/ 忽略构建产物'
        ],
        code: `# 依赖目录
node_modules/

# 环境变量
.env

# 日志文件
*.log

# 构建产物
dist/`,
        verification: '编写了包含 node_modules 和 .env 的 .gitignore 规则',
        filePath: 'git-commands.md',
        cognitiveLoad: 'low',
        dependsOn: ['git-3'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '创建 .gitignore',
          'verification': '.gitignore',
          'hint': '在根目录创建 .gitignore 文件'
         },
         {
          'id': 'step-2',
          'title': '添加忽略规则',
          'verification': 'node_modules',
          'hint': '添加目录忽略规则'
         },
         {
          'id': 'step-3',
          'title': '提交配置',
          'verification': 'git add .gitignore',
          'hint': '将 .gitignore 加入版本控制'
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      }
    ]
  },
  {
    id: 'git-branch',
    name: '阶段二：分支协作',
    description: '掌握分支创建、合并、变基等协作操作',
    levels: [
      {
        id: 'git-5',
        number: 5,
        title: 'branch / checkout / switch',
        concept: '创建与切换分支',
        difficulty: 'medium',
        task: '创建一个新分支并切换到该分支进行开发',
        prerequisites: `<h4>🔀 分支</h4>
<p>分支让你在不影响主分支的情况下开发新功能：</p>
<pre><code>git branch feature       # 创建分支
git checkout feature     # 切换分支
git switch feature       # 新语法切换
git checkout -b feature  # 创建并切换
</code></pre>

<h4>🔑 分支模型</h4>
<ul>
  <li><code>main</code> / <code>master</code> — 主分支，保持可发布状态</li>
  <li><code>feature/*</code> — 功能分支</li>
  <li><code>bugfix/*</code> — 修复分支</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建分支
[git branch feature-name](创建新分支) 不会切换。

步骤 2 — 切换分支
[git checkout](旧语法) 或 [git switch](新语法) 切换。

步骤 3 — 创建并切换
[git checkout -b](创建并切换到新分支) 一步完成。`,
        contextCode: `# 分支操作参考

# 查看分支
git branch              # 本地分支
git branch -a           # 所有分支（含远程）
git branch -v           # 显示最后提交

# 创建分支
git branch feature      # 创建但不切换

# 切换分支（旧语法）
git checkout feature
git checkout -b feature # 创建并切换

# 切换分支（新语法）
git switch feature
git switch -c feature   # 创建并切换

# 删除分支
git branch -d feature   # 安全删除
git branch -D feature   # 强制删除`,
        starterCode: `# 记录以下分支操作命令：

# 1. 创建一个名为 feature-login 的分支


# 2. 切换到 feature-login 分支


# 3. 一步完成：创建并切换到 feature-cart 分支


# 4. 查看所有分支

`,
        hints: [
          'git branch feature-login 创建分支',
          'git checkout feature-login 切换',
          'git checkout -b feature-cart 创建并切换',
          'git branch -a 查看所有分支'
        ],
        code: `# 1. 创建分支
git branch feature-login

# 2. 切换分支
git checkout feature-login

# 3. 创建并切换
git checkout -b feature-cart

# 4. 查看所有分支
git branch -a`,
        verification: '包含了 branch、checkout/switch 命令',
        filePath: 'git-commands.md',
        cognitiveLoad: 'medium',
        dependsOn: ['git-4'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '创建分支',
          'verification': 'git branch',
          'hint': '用 git branch 创建新分支'
         },
         {
          'id': 'step-2',
          'title': '切换分支',
          'verification': 'git checkout',
          'hint': '用 checkout 或 switch 切换分支'
         },
         {
          'id': 'step-3',
          'title': '查看分支',
          'verification': 'git branch -a',
          'hint': '查看所有本地和远程分支'
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'git-6',
        number: 6,
        title: 'merge 合并分支',
        concept: '合并与冲突',
        difficulty: 'medium',
        task: '将功能分支合并回主分支，处理可能出现的冲突',
        prerequisites: `<h4>🔀 合并</h4>
<pre><code>git checkout main
git merge feature
</code></pre>

<h4>🔑 合并类型</h4>
<ul>
  <li><code>Fast-forward</code> — 主分支无新提交，直接移动指针</li>
  <li><code>Three-way merge</code> — 两边都有新提交，创建合并提交</li>
  <li><code>冲突</code> — 同一行被修改，需要手动解决</li>
</ul>`,
        conceptDetail: `步骤 1 — 切换到目标分支
合并前先切换到接收合并的分支。

步骤 2 — 执行合并
[git merge feature](将 feature 合并到当前分支)。

步骤 3 — 处理冲突
如果有冲突，手动编辑文件后 add + commit。`,
        contextCode: `# 合并分支参考

# 基本合并
git checkout main
git merge feature

# 合并后删除分支
git branch -d feature

# 取消合并
git merge --abort

# 冲突处理流程
# 1. Git 标记冲突文件
# 2. 手动编辑解决冲突
# 3. git add 冲突文件
# 4. git commit 完成合并

# 冲突标记
<<<<<<< HEAD
当前分支的内容
=======
要合并分支的内容
>>>>>>> feature`,
        starterCode: `# 记录以下合并操作命令：

# 1. 切换到 main 分支


# 2. 将 feature-login 分支合并到 main


# 3. 合并后删除 feature-login 分支


# 4. 如果冲突，解决后提交

`,
        hints: [
          'git checkout main 切换到主分支',
          'git merge feature-login 合并',
          'git branch -d feature-login 删除分支',
          '冲突后 git add + git commit'
        ],
        code: `# 1. 切换到 main
git checkout main

# 2. 合并
git merge feature-login

# 3. 删除已合并分支
git branch -d feature-login

# 4. 如果有冲突
# 编辑冲突文件 → git add . → git commit`,
        verification: '包含了 merge 命令和冲突处理流程',
        filePath: 'git-commands.md',
        cognitiveLoad: 'medium',
        dependsOn: ['git-5'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '切换主分支',
          'verification': 'git checkout main',
          'hint': '切换到目标接收分支'
         },
         {
          'id': 'step-2',
          'title': '执行合并',
          'verification': 'git merge',
          'hint': '用 git merge 将分支合并过来'
         },
         {
          'id': 'step-3',
          'title': '解决冲突',
          'verification': 'merge conflict',
          'hint': '手动解决合并冲突后提交'
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'git-7',
        number: 7,
        title: 'rebase 变基',
        concept: '变基操作',
        difficulty: 'hard',
        task: '使用 rebase 将功能分支的提交移到主分支最新提交之后',
        prerequisites: `<h4>🔀 rebase 变基</h4>
<pre><code>git checkout feature
git rebase main
</code></pre>

<h4>🔑 rebase vs merge</h4>
<ul>
  <li><code>merge</code> — 保留完整历史，产生合并提交</li>
  <li><code>rebase</code> — 线性化历史，不产生合并提交</li>
  <li>rebase 后需要 force push（已推送的分支）</li>
</ul>

<h4>⚠️ 注意</h4>
<ul>
  <li>不要对已推送到远程的分支 rebase</li>
  <li>rebase 改写了提交历史</li>
</ul>`,
        conceptDetail: `步骤 1 — 切换到功能分支
rebase 在当前分支上执行。

步骤 2 — 执行 rebase
[git rebase main](将当前分支的提交移到 main 之后)。

步骤 3 — 冲突处理
rebase 冲突需要逐个提交解决。`,
        contextCode: `# rebase 变基参考

# 基本变基
git checkout feature
git rebase main

# 变基后合并
git checkout main
git merge feature  # Fast-forward

# 交互式变基（修改提交）
git rebase -i HEAD~3

# 取消变基
git rebase --abort

# rebase vs merge
# merge:  A---B---C---M  (main)
#              \---D---E  (feature)
#
# rebase: A---B---C---D'---E'  (feature)
#                    (main)

# rebase 后推送到远程
git push --force-with-lease`,
        starterCode: `# 记录以下 rebase 操作命令：

# 1. 切换到 feature 分支


# 2. 将 feature 分支变基到 main 之上


# 3. 变基后切换到 main 并合并（Fast-forward）

`,
        hints: [
          'git checkout feature 切换到功能分支',
          'git rebase main 变基',
          '变基后 main 合并会是 Fast-forward'
        ],
        code: `# 1. 切换到 feature
git checkout feature

# 2. 变基到 main 之上
git rebase main

# 3. 切换到 main 并合并
git checkout main
git merge feature  # Fast-forward 合并`,
        verification: '使用了 rebase 命令进行变基操作',
        filePath: 'git-commands.md',
        cognitiveLoad: 'high',
        dependsOn: ['git-6'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '切换功能分支',
          'verification': 'git checkout feature',
          'hint': '切换到需要变基的功能分支'
         },
         {
          'id': 'step-2',
          'title': '执行 rebase',
          'verification': 'git rebase',
          'hint': '用 git rebase 移动到最新提交'
         },
         {
          'id': 'step-3',
          'title': '处理冲突',
          'verification': 'git rebase --continue',
          'hint': '解决冲突后继续变基操作'
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      }
    ]
  },
  {
    id: 'git-remote',
    name: '阶段三：远程协作',
    description: '掌握远程仓库操作和团队协作流程',
    levels: [
      {
        id: 'git-8',
        number: 8,
        title: 'remote / push / pull',
        concept: '远程仓库操作',
        difficulty: 'medium',
        task: '配置远程仓库并推拉代码',
        prerequisites: `<h4>🔀 远程仓库</h4>
<pre><code>git remote add origin URL   # 添加远程
git push -u origin main     # 推送
git pull origin main        # 拉取
</code></pre>

<h4>🔑 核心命令</h4>
<ul>
  <li><code>git remote</code> — 管理远程仓库</li>
  <li><code>git push</code> — 推送到远程</li>
  <li><code>git pull</code> — 从远程拉取（= fetch + merge）</li>
  <li><code>git fetch</code> — 只下载，不合并</li>
</ul>`,
        conceptDetail: `步骤 1 — 添加远程仓库
[git remote add origin URL](添加远程仓库别名)。

步骤 2 — 推送代码
[git push -u origin main](推送并设置上游跟踪)。

步骤 3 — 拉取更新
[git pull origin main](拉取并合并远程更新)。`,
        contextCode: `# 远程操作参考

# 管理远程
git remote -v                  # 查看远程列表
git remote add origin URL     # 添加远程
git remote remove origin      # 删除远程
git remote rename old new     # 重命名

# 推送
git push origin main          # 推送到 main
git push -u origin main       # 推送并设置跟踪
git push --force-with-lease   # 安全强制推送

# 拉取
git pull origin main          # 拉取并合并
git fetch origin              # 只下载
git merge origin/main         # 手动合并

# 首次推送
git push -u origin main  # -u 设置上游，之后只需 git push`,
        starterCode: `# 记录以下远程操作命令：

# 1. 添加远程仓库（URL 替换为实际地址）


# 2. 查看远程仓库列表


# 3. 首次推送到 main 分支（设置上游）


# 4. 从远程拉取最新代码

`,
        hints: [
          'git remote add origin URL',
          'git remote -v 查看远程',
          'git push -u origin main 首次推送',
          'git pull origin main 拉取更新'
        ],
        code: `# 1. 添加远程仓库
git remote add origin https://github.com/user/repo.git

# 2. 查看远程
git remote -v

# 3. 首次推送
git push -u origin main

# 4. 拉取更新
git pull origin main`,
        verification: '包含了 remote、push、pull 命令',
        filePath: 'git-commands.md',
        cognitiveLoad: 'medium',
        dependsOn: ['git-7'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '添加远程仓库',
          'verification': 'git remote add',
          'hint': '添加远程仓库地址'
         },
         {
          'id': 'step-2',
          'title': '推送代码',
          'verification': 'git push',
          'hint': '将本地提交推送到远程'
         },
         {
          'id': 'step-3',
          'title': '拉取代码',
          'verification': 'git pull',
          'hint': '拉取远程最新代码'
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'git-9',
        number: 9,
        title: 'clone / fork',
        concept: '克隆与分叉',
        difficulty: 'easy',
        task: '克隆一个远程仓库到本地',
        prerequisites: `<h4>🔀 git clone</h4>
<pre><code>git clone https://github.com/user/repo.git
</code></pre>

<h4>🔑 clone vs fork</h4>
<ul>
  <li><code>clone</code> — 下载仓库到本地</li>
  <li><code>fork</code> — 在 GitHub/Gitee 上复制他人仓库到自己账户</li>
  <li>fork 后 clone 到本地开发，提 PR 合回原仓库</li>
</ul>`,
        conceptDetail: `步骤 1 — clone 克隆
[git clone URL](下载远程仓库及完整历史)。

步骤 2 — fork 分叉（在平台上操作）
Fork 按钮在 GitHub/Gitee 仓库页面。

步骤 3 — 协作流程
fork → clone → 开发 → push → PR。`,
        contextCode: `# 克隆操作参考

# 克隆仓库
git clone https://github.com/user/repo.git
git clone https://github.com/user/repo.git my-folder  # 指定目录名

# 克隆指定分支
git clone -b feature https://github.com/user/repo.git

# fork 工作流
# 1. 在 GitHub 上点击 Fork 按钮
# 2. git clone 你 fork 的仓库
# 3. git remote add upstream 原仓库地址
# 4. 开发完成后 push 到你的 fork
# 5. 在 GitHub 上创建 Pull Request`,
        starterCode: `# 记录以下克隆和协作命令：

# 1. 克隆仓库到本地


# 2. 克隆并指定目录名


# 3. Fork 工作流：添加原仓库为 upstream

`,
        hints: [
          'git clone URL 克隆仓库',
          'git clone URL folder 指定目录',
          'git remote add upstream 原仓库地址'
        ],
        code: `# 1. 克隆仓库
git clone https://github.com/user/repo.git

# 2. 指定目录名
git clone https://github.com/user/repo.git my-project

# 3. 添加 upstream
git remote add upstream https://github.com/original/repo.git`,
        verification: '包含了 clone 和 fork 工作流命令',
        filePath: 'git-commands.md',
        cognitiveLoad: 'low',
        dependsOn: ['git-8'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '克隆仓库',
          'verification': 'git clone',
          'hint': '用 git clone 克隆远程仓库'
         },
         {
          'id': 'step-2',
          'title': '查看远程信息',
          'verification': 'git remote -v',
          'hint': '查看远程仓库配置'
         },
         {
          'id': 'step-3',
          'title': '同步更新',
          'verification': 'git fetch',
          'hint': '用 git fetch 获取远程更新'
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'git-10',
        number: 10,
        title: '实战 - 团队协作流程',
        concept: 'Git Flow 工作流',
        difficulty: 'hard',
        task: '描述一个完整的团队 Git 协作流程',
        prerequisites: `<h4>🔀 团队协作</h4>
<p>团队开发需要统一的 Git 工作流：</p>

<h4>🔑 Git Flow 模型</h4>
<ul>
  <li><code>main</code> — 生产环境代码</li>
  <li><code>develop</code> — 开发集成分支</li>
  <li><code>feature/*</code> — 功能开发分支</li>
  <li><code>release/*</code> — 发布准备分支</li>
  <li><code>hotfix/*</code> — 紧急修复分支</li>
</ul>`,
        conceptDetail: `步骤 1 — 从 develop 创建 feature 分支
每个功能开发都在独立分支上进行。

步骤 2 — 开发完成后提 PR
通过 Pull Request 代码审查后合并到 develop。

步骤 3 — 发布流程
develop → release → main，打 tag 标记版本。`,
        contextCode: `# 团队协作完整流程

# 1. 克隆仓库
git clone https://github.com/team/project.git

# 2. 创建功能分支
git checkout develop
git checkout -b feature/user-auth

# 3. 开发并提交
git add .
git commit -m "feat: 实现用户认证"
git push -u origin feature/user-auth

# 4. 创建 Pull Request（在 GitHub 上）
# 等待 Code Review → 合并到 develop

# 5. 发布
git checkout main
git merge develop
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin main --tags

# 6. 紧急修复
git checkout main
git checkout -b hotfix/fix-login
# 修复后合并回 main 和 develop`,
        starterCode: `# 描述团队协作流程，包含以下命令：

# 1. 克隆团队仓库


# 2. 从 develop 创建功能分支


# 3. 开发完成后的提交和推送


# 4. 合并到 develop 的流程（文字描述）


# 5. 打发布标签

`,
        hints: [
          'git clone 克隆仓库',
          'git checkout -b feature/xxx 创建功能分支',
          'git push -u origin feature/xxx 推送',
          'git tag -a v1.0.0 打标签'
        ],
        code: `# 1. 克隆仓库
git clone https://github.com/team/project.git

# 2. 创建功能分支
git checkout develop
git checkout -b feature/user-auth

# 3. 开发提交
git add .
git commit -m "feat: 用户认证功能"
git push -u origin feature/user-auth

# 4. 在 GitHub 创建 PR → Code Review → 合并

# 5. 发布打标签
git checkout main
git merge develop
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin main --tags`,
        verification: '描述了包含分支策略的完整团队协作流程',
        filePath: 'git-commands.md',
        cognitiveLoad: 'high',
        dependsOn: ['git-9'],
        commonMistakes: [
         {
          'pattern': 'git commit',
          'explanation': 'commit 前先用 git status'
         },
         {
          'pattern': 'git push',
          'explanation': '推送前先 git pull'
         }
        ],
                microSteps: [
         {
          'id': 'step-1',
          'title': '创建 feature 分支',
          'verification': 'git checkout -b',
          'hint': '从 main 创建功能分支'
         },
         {
          'id': 'step-2',
          'title': '推送功能分支',
          'verification': 'git push origin feature',
          'hint': '将功能分支推送到远程'
         },
         {
          'id': 'step-3',
          'title': '创建 PR',
          'verification': 'pull request',
          'hint': '发起 Pull Request 请求合并'
         }
        ],
        variations: [
         {
          'name': 'git restore',
          'description': 'git restore 撤销工作区修改'
         }
        ],
        transferTasks: [
         {
          'task': '创建分支→修改→合并→解决冲突',
          'target': '掌握 Git 分支协作'
         }
        ]
      }
    ]
  }
,
{
    id: 'git-workflow',
    name: '阶段四：协作工作流实战',
    description: '综合运用 Git 技能，实践团队协作的完整工作流',
    levels: [
            {
              id: 'git-11',
              number: 11,
              type: 'project',
              project: 'git-workflow',
              projectModule: '分支策略',
              title: 'Git Flow 分支策略',
              concept: 'Git Flow',
              difficulty: 'hard',
              task: '在项目中配置 Git Flow 分支策略：main（生产）、develop（开发）、feature/*（功能）、release/*（发布）、hotfix/*（紧急修复）',
              prerequisites: '<h4>📚 Git Flow 分支模型</h4><p>Git Flow 定义了 5 种分支：main（稳定版）、develop（开发版）、feature/*（新功能）、release/*（发布准备）、hotfix/*（紧急修复）。</p>',
              conceptDetail: 'Git Flow 是经典分支模型。main 分支只接受 release 和 hotfix 合并。develop 是开发主分支。feature 分支从 develop 分叉。',
              contextCode: '',
              hints: [
                'git flow init 初始化 Git Flow',
                'feature/ 分支命名规范 feature/功能名称',
                'release/1.0.0 创建发布分支'
              ],
              code: '# Git Flow 命令演示\n## 初始化\ngit flow init\n\n## 创建 feature 分支\ngit flow feature start user-auth\ngit flow feature finish user-auth\n## 等效于：\n## git checkout -b feature/user-auth develop\n## git checkout develop && git merge --no-ff feature/user-auth\n## git branch -d feature/user-auth\n\n## 创建 release 分支\ngit flow release start 1.0.0\ngit flow release finish 1.0.0\n## 自动合并到 main 和 develop\n\n## 紧急修复\ngit flow hotfix start critical-bug\ngit flow hotfix finish critical-bug',
              verification: '理解 Git Flow 五种分支及各自用途，能创建 feature/release/hotfix 分支',
              filePath: 'docs/git-flow.md',
              projectFiles: {
                'docs/git-flow.md': '',
                'CHANGELOG.md': '# Changelog'
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'git-10'
              ],
              commonMistakes: [
                {
                  pattern: '--no-ff',
                  explanation: '--no-ff 确保合并产生合并提交，保留分支历史'
                },
                {
                  pattern: 'hotfix',
                  explanation: 'hotfix 从 main 分叉，修复完后合并到 main 和 develop'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '配置 main 分支',
                  'verification': 'main',
                  'hint': '将 main 设为生产分支'
                },
                {
                  'id': 'step-2',
                  'title': '创建 develop',
                  'verification': 'develop',
                  'hint': '从 main 创建开发分支'
                },
                {
                  'id': 'step-3',
                  'title': '创建 feature',
                  'verification': 'feature/',
                  'hint': '从 develop 创建功能分支'
                }
              ],
              variations: [
                {
                  name: 'GitHub Flow',
                  description: '更简单的分支模型，只有 main 和 feature 分支'
                }
              ],
              transferTasks: [
                {
                  task: '比较 Git Flow 和 GitHub Flow 的适用场景',
                  target: '理解不同分支策略的权衡'
                }
              ],
            },
            {
              id: 'git-12',
              number: 12,
              type: 'project',
              project: 'git-workflow',
              projectModule: '协作流程',
              title: 'Pull Request 协作',
              concept: 'PR 工作流',
              difficulty: 'medium',
              task: '模拟 PR 协作流程：Fork 仓库 → 创建 feature 分支 → 提交 → 创建 PR → Code Review → 合并',
              prerequisites: '<h4>📚 PR 工作流</h4><p>Pull Request 是代码审查的机制。<code>git push origin feature/xxx</code> 推送后，在 GitHub/Gitee 上创建 PR。</p>',
              conceptDetail: 'Pull Request 是代码审查请求。Code Review 审查代码质量。GitHub CLI (gh) 命令行创建 PR。',
              contextCode: '',
              hints: [
                'git push origin feature/xxx 推送后网页创建 PR',
                'PR 描述包含改动内容和测试方法',
                'Reviewer 审查后 Approve 或 Request Changes'
              ],
              code: '# PR 协作流程\n\n## 1. Fork + Clone\n# 在 GitHub 上 Fork 主仓库\ngit clone https://github.com/你的用户名/项目名.git\ngit remote add upstream https://github.com/原仓库/项目名.git\n\n## 2. 创建功能分支\ngit checkout -b feature/new-feature\n# ... 开发代码 ...\ngit add .\ngit commit -m "feat: 添加新功能"\ngit push origin feature/new-feature\n\n## 3. 创建 PR\n# 在 GitHub 网页创建 Pull Request\n# 或使用 gh CLI：\ngh pr create --title "feat: 添加新功能" --body "改动说明"\n\n## 4. Code Review\n# 审查者在 PR 页面评论或 Approve\n# 需要修改则继续提交：\ngit add . && git commit -m "fix: 修复 review 问题"\ngit push origin feature/new-feature\n\n## 5. 合并\n# PR 通过后 Squash merge / Rebase merge / Merge commit\ngh pr merge --squash',
              verification: '理解 Fork + PR 协作流程，从创建分支到合并的完整步骤',
              filePath: 'docs/pr-workflow.md',
              projectFiles: {
                'docs/pr-workflow.md': '',
                '.github/PULL_REQUEST_TEMPLATE.md': '## 改动说明\\n\\n## 测试方法\\n\\n## 相关 Issue'
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'git-11'
              ],
              commonMistakes: [
                {
                  pattern: 'git push',
                  explanation: '首次推送新分支需要 git push -u origin 分支名'
                },
                {
                  pattern: 'upstream',
                  explanation: 'upstream 指向原仓库，定期 git fetch upstream 同步'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': 'Fork 仓库',
                  'verification': 'fork',
                  'hint': 'Fork 远程仓库到个人账户'
                },
                {
                  'id': 'step-2',
                  'title': '创建 PR',
                  'verification': 'pull request',
                  'hint': '从 feature 分支发起 PR'
                },
                {
                  'id': 'step-3',
                  'title': 'Code Review',
                  'verification': 'review',
                  'hint': '审查代码后合并 PR'
                }
              ],
              variations: [
                {
                  name: 'Gerrit',
                  description: '更严格的代码审查系统'
                }
              ],
              transferTasks: [
                {
                  task: '配置 GitHub Actions 自动检查 PR 代码质量',
                  target: '掌握 CI 集成'
                }
              ],
            },
            {
              id: 'git-13',
              number: 13,
              type: 'project',
              project: 'git-workflow',
              projectModule: '冲突解决',
              title: '合并冲突解决',
              concept: '冲突处理',
              difficulty: 'hard',
              task: '模拟多人协作冲突场景：两个分支修改同一文件，手动解决冲突并正确合并',
              prerequisites: '<h4>📚 冲突解决基础</h4><p>冲突文件包含 <<<<<<<（当前分支）、=======（分隔符）、>>>>>>>（传入分支）标记。手动编辑后 <code>git add</code> 标记已解决。</p>',
              conceptDetail: '冲突标记 <<<<< ===== >>>>>。git merge 合并操作。git rebase 重新播放提交。',
              contextCode: '',
              hints: [
                'git merge 产生冲突时用 git status 查看冲突文件',
                '手动编辑移除冲突标记后 git add',
                'git mergetool 打开可视化合并工具'
              ],
              code: '# 冲突场景模拟\n## 1. 创建两个分支修改同一文件\ngit checkout -b feature/login\necho \'function login() { return "v1" }\' > auth.js\ngit add . && git commit -m "feat: login v1"\n\ngit checkout main\ngit checkout -b feature/profile\necho \'function login() { return "v2" }\' > auth.js\ngit add . && git commit -m "feat: login v2"\n\n## 2. 合并产生冲突\ngit checkout feature/login\ngit merge feature/profile\n# 输出: CONFLICT in auth.js\n\n## 3. 查看冲突文件\ncat auth.js\n# <<<<<<< HEAD\n# function login() { return "v1" }\n# =======\n# function login() { return "v2" }\n# >>>>>>> feature/profile\n\n## 4. 解决冲突\n# 编辑 auth.js 保留需要的内容\n# git add auth.js\n# git commit -m "merge: 解决 login 冲突"',
              verification: '理解冲突产生原因，能手动解决冲突标记并正确合并',
              filePath: 'docs/conflict-resolution.md',
              projectFiles: {
                'docs/conflict-resolution.md': ''
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'git-12'
              ],
              commonMistakes: [
                {
                  pattern: '<<<<<<<',
                  explanation: '解决冲突后必须删除所有冲突标记，包括 <<<<< ===== >>>>>'
                },
                {
                  pattern: 'git rebase',
                  explanation: 'rebase 冲突比 merge 更复杂，每个提交都要解决冲突'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '模拟冲突场景',
                  'verification': 'merge',
                  'hint': '模拟两个分支修改同一文件'
                },
                {
                  'id': 'step-2',
                  'title': '解决冲突标记',
                  'verification': 'conflict markers',
                  'hint': '编辑文件中的冲突标记区域'
                },
                {
                  'id': 'step-3',
                  'title': '完成合并',
                  'verification': 'git merge --continue',
                  'hint': '提交冲突解决结果'
                }
              ],
              variations: [
                {
                  name: 'git mergetool',
                  description: '可视化合并工具：vimdiff、meld、Beyond Compare'
                }
              ],
              transferTasks: [
                {
                  task: '配置 .gitattributes 处理换行符冲突',
                  target: '掌握跨平台协作技巧'
                }
              ],
            }
    ]
  }
]
