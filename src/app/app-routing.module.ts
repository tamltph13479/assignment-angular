import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/client-pages/post-list/post-list.component';
import { ProductsListComponent } from './components/client-pages/products-list/products-list.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { CartComponent } from './pages/client-pase/cart/cart.component';
import { HomepagesComponent } from './pages/client-pase/homepages/homepages.component';
import { PostDetailComponent } from './pages/client-pase/post-detail/post-detail.component';
import { ProductDetailComponent } from './pages/client-pase/product-detail/product-detail.component';
import { SigninComponent } from './pages/client-pase/signin/signin.component';
import { SignupComponent } from './pages/client-pase/signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomepagesComponent

      },
      {
        path: 'product',
        children: [
          {
            path: '',
            component: ProductsListComponent
          },
          {
            path: ':id',
            component: ProductDetailComponent
          }
        ]
      },
      {
        path: 'cart',
        component: CartComponent

      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            component: PostListComponent
          },
          {
            path: ':id',
            component: PostDetailComponent
          }
        ]

      }
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard],
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent
          },

          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFormComponent
          },
          {
            path: ':id',
            component: AdminProductDetailComponent
          },
        ]
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] // Đưa vào để các route trên có thể sử dụng
})
export class AppRoutingModule { }
