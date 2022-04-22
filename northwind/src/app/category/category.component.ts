import { Component, OnInit } from '@angular/core';
import { category } from '../models/category';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:category [] = [];
  
  currentCategory : category;

  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryservice.getCategories().subscribe(Response=>{
      this.categories = Response.data
    })

    }

    setCurrentCategory(category:category){
      this.currentCategory = category;
    }
    
    getCurrentCategoryClass(category:category){
      if (category == this.currentCategory){
        return "list-group-item active"
      }else{
        return "list-group-item"
      }
    }


    getAllCategoryClass(){
      if (!this.currentCategory){
        return "list-group-item active"

      }
      else{
        return "list-group-item"
      }
      
    }

}
