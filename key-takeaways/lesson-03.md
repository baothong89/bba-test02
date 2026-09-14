# Git & Javascript (contiune)
## GIT section
### 3 vùng của git:
    - Working directory
    - Staging area
    - Repository
### Các câu lệnh git
#### Git - unstage
    - git init
    - git add . or add <file1> <file2>
    - git commit -m"comment"
    - git status
    - git log
    - git restore --stage (or <file1> <file2> ): đưa file từ staging -> working
#### Git un-commit
    - git reset --soft head~4: đưa 4 commit mới nhất từ repository -> staging area
    - git reset head~4: đưa 4 commit mới nhất từ repository -> working directory
    - git branch <branch name>
    - git checkout <branch name>
    - git checkout -b <branch name>
    - git checkout -d <branch name> 
## Javascript section
### Câu điều kiện (condition sentence)
    1. if() {

    };

    2. if(){

    } eslse{

    };

    3. if(){

    }else if(){

    };

    4. switch ()
     case(1): {}
     case(2): {}
     default: {};    

### Vòng lặp (loop)
    - For (let i = 0; i <=n, i++){

    } ;
### Conventions
    - kebab-case : tên file, folder
    - camelCase: tên biến, hàm
    - PascalCase: tên class
    - snake-case: 


