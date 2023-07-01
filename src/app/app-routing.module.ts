import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./pages/servicos/servicos.module').then( m => m.ServicosPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./pages/contato/contato.module').then( m => m.ContatoPageModule)
  },
  
  {
    path: 'agendamentos',
    loadChildren: () => import('./pages/agendamentos/agendamentos.module').then( m => m.AgendamentosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./a2/welcome/welcome.module').then( m => m.WelcomePageModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./a2/register/register.module').then( m => m.RegisterPageModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'lista-produtos',
    loadChildren: () => import('./aula4/lista-produtos/lista-produtos.module').then( m => m.ListaProdutosPageModule)
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./aula4/cadastro-produto/cadastro-produto.module').then( m => m.CadastroProdutoPageModule)
  },
  {
    path: 'endereco',
    loadChildren: () => import('./aula5/endereco/endereco.module').then( m => m.EnderecoPageModule)
  },
  {
    path: 'api-dog',
    loadChildren: () => import('./atividade/api-dog/api-dog.module').then( m => m.ApiDogPageModule)
  },
  {
    path: 'alert-sample',
    loadChildren: () => import('./capacitor/alert-sample/alert-sample.module').then( m => m.AlertSamplePageModule)
  },
//   {
//   path: 'auth', // registra o módulo Auth na aplicação
//   loadChildren: () =>import('./auth/auth.module').then( m => m.AuthModule)
// },
  {
    path: 'marcar-consulta',
    loadChildren: () => import('./pages/marcar-consulta/marcar-consulta.module').then( m => m.MarcarConsultaPageModule)
  },
  {
    path: 'dependentes',
    loadChildren: () => import('./pages/dependentes/dependentes.module').then( m => m.DependentesPageModule)
  },
  {
    path: 'cadastrar-dependente',
    loadChildren: () => import('./pages/cadastrar-dependente/cadastrar-dependente.module').then( m => m.CadastrarDependentePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
