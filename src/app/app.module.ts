import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
// Import thư viện ReactiveFormsModule

import { ProductDetailComponent } from './pages/client-pase/product-detail/product-detail.component';
import { HomepagesComponent } from './pages/client-pase/homepages/homepages.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { NavadminComponent } from './components/admin-pages/navadmin/navadmin.component';
import { HeaderComponent } from './components/client-pages/header/header.component';
import { FooterComponent } from './components/client-pages/footer/footer.component';
import { ProductsListComponent } from './components/client-pages/products-list/products-list.component';
import { BannerSlideshowComponent } from './components/client-pages/banner-slideshow/banner-slideshow.component';
import { PostListComponent } from './components/client-pages/post-list/post-list.component';
import { SearchComponent } from './components/client-pages/search/search.component';
import { AdviseComponent } from './components/client-pages/advise/advise.component';
import { HeaderadminComponent } from './components/admin-pages/headeradmin/headeradmin.component';
import { AdminPostDetailComponent } from './pages/admin/admin-posts/admin-post-detail/admin-post-detail.component';
import { AdminPostListComponent } from './pages/admin/admin-posts/admin-post-list/admin-post-list.component';
import { AdminPostFormComponent } from './pages/admin/admin-posts/admin-post-form/admin-post-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryDetailComponent } from './pages/admin/admin-category/admin-category-detail/admin-category-detail.component';
import { PostDetailComponent } from './pages/client-pase/post-detail/post-detail.component';
import { SigninComponent } from './pages/client-pase/signin/signin.component';
import { SignupComponent } from './pages/client-pase/signup/signup.component';
// toastr angular
import { NgToastModule } from 'ng-angular-popup';
import { CartComponent } from './pages/client-pase/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowValidateComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    ProductDetailComponent,
    HomepagesComponent,
    NavadminComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent,
    BannerSlideshowComponent,
    PostListComponent,
    SearchComponent,
    AdviseComponent,
    HeaderadminComponent,
    AdminPostDetailComponent,
    AdminPostListComponent,
    AdminPostFormComponent,
    AdminCategoryListComponent,
    AdminCategoryFormComponent,
    AdminCategoryDetailComponent,
    PostDetailComponent,
    SigninComponent,
    SignupComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FormsModule, // Đưa vào đây để FormComponent bên trên có thể dùng
    ReactiveFormsModule,
    NgToastModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
