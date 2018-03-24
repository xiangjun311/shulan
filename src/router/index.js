import Vue from 'vue'
import Router from 'vue-router'

const ClassPreview =  r => require.ensure([],() => r(require('@/pages/teacher/ClassPreview.vue')),'ClassPreview');
const Teacher =  r => require.ensure([],() => r(require('@/pages/teacher/Teacher.vue')),'Teacher');
const Index =  r => require.ensure([],() => r(require('@/components/Index.vue')),'Index');

const MicroClass =  r => require.ensure([],() => r(require('@/pages/teacher/MicroClass.vue')),'Teacher');

const MicroClassMy =  r => require.ensure([],() => r(require('@/components/teacher/MicroClassMy.vue')),'Teacher');

const MicroClassSchool =  r => require.ensure([],() => r(require('@/components/teacher/MicroClassSchool.vue')),'Teacher');
//设置
const Sett =  r => require.ensure([],() => r(require('@/pages/teacher/Sett.vue')),'Teacher');
//基础信息
const Information =  r => require.ensure([],() => r(require('@/components/teacher/Information.vue')),'Teacher');
//教材版本
const Edition =  r => require.ensure([],() => r(require('@/components/teacher/Edition.vue')),'Teacher');
//修改密码
const Changepwd =  r => require.ensure([],() => r(require('@/components/teacher/Changepwd.vue')),'Teacher');

//题库
const Question =  r => require.ensure([],() => r(require('@/pages/teacher/Question.vue')),'Teacher');
//我的题库
const MyQuestionBank =  r => require.ensure([],() => r(require('@/components/teacher/MyQuestionBank.vue')),'Teacher');
// 本校题库
const SchoolQuestion =  r => require.ensure([],() => r(require('@/components/teacher/SchoolQuestion.vue')),'Teacher');
//云题库
const YunQuestion =  r => require.ensure([],() => r(require('@/components/teacher/YunQuestion.vue')),'Teacher');


const Login = r => require.ensure([],() => r(require('@/pages/Login.vue')),'Login');
const Manage = r => require.ensure([],() => r(require('@/pages/manage/Manage.vue')),'Manage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/teacher', //教师端一级路由
      name: 'teacher',
      component: Teacher,
      children:[{
         path: 'index', 
		     name: 'index',
		     component: Index
         },
         {
         	path:'preview',
         	name:'preview',
         	component:ClassPreview
         },
         {
         	 path: 'microclass', //微课 二级路由
		     name: 'microclass',
		     component: MicroClass,
		     children:[{ //三级路由 
                path: 'my', //我的微课
			    name: 'my',
			    component: MicroClassMy
		     },
          
         {
                path: 'school', //本校微课
			    name: 'school',
			    component: MicroClassSchool
		     },{
            path:"/teacher/microclass",//点击微课时，进行重定向到我的微课
            redirect:"/teacher/microclass/my"
          }]
         },
         {
           path: 'set', //设置 二级路由
           name: 'Set',
           component: Sett,
           children:[{ //三级路由 
                  path: 'information', //基础信息
                  name: 'Information',
                  component: Information
                  },
                 {
                  path: 'edition', //教材版本
                  name: 'Edition',
                  component: Edition
                 },
                 {
                  path: 'changepwd', //修改密码
                  name: 'Changepwd',
                  component: Changepwd
                 },
                 {
                    path:"/teacher/set",//点击设置时，进行重定向到我的微课
                    redirect:"/teacher/set/information"
                  }]
         },
         {
           path: 'question', //题库二级路由
           name: 'Question',
           component: Question,
           children:[{ //三级路由 
                  path: 'myquestion', //我的题库
                  name: 'MyQuestionBank',
                  component: MyQuestionBank
                  },
                 {
                  path: 'schoolquestion', //本校题库
                  name: 'SchoolQuestion',
                  component: SchoolQuestion
                 },
                 {
                  path: 'yunquestion', //云题库
                  name: 'YunQuestion',
                  component: YunQuestion
                 },
                 {
                    path:"/teacher/question",//点击设置时，进行重定向到我的微课
                    redirect:"/teacher/question/myquestion"
                  }]
         }
      ]
    },{
      path: '/manage',
      name: 'manage',
      component: Manage,
      children:[{
             path: 'index', 
		     name: 'index',
		     component: Index
      }]
    },
    {
      path:"/",
      redirect:"/teacher/index"
    }
  ]
})
