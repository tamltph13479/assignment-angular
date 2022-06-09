import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ReactiveFormsModule } from '@angular/forms';
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



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FormsModule, // Đưa vào đây để FormComponent bên trên có thể dùng
    ReactiveFormsModule, // Đưa vào để AdminProductForm sử dụng
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
