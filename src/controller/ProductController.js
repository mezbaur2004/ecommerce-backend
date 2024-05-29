const {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByCategoryService,
    ListByBrandService,
    ListByRemarkService,
    ListBySimilarService,
    ListByKeywordService,
    DetailsService,
    ReviewListService,
    CreateReviewService,
}=require('../services/ProductServices');


exports.ProductBrandList=async(req,res)=>{

    let result=await BrandListService(req)
    return res.status(200).send(result)

}


exports.ProductCategoryList=async(req,res)=>{

    let result=await CategoryListService(req)
    return res.status(200).send(result)
}

exports.ProductSliderList=async(req,res)=>{

    let result=await SliderListService()
    return res.status(200).send(result)
}

exports.ProductListByBrand=async(req,res)=>{

    let result=await ListByBrandService(req)
    return res.status(200).send(result)
}

exports.ProductListByCategory=async(req,res)=>{

    let result=await ListByCategoryService(req)
    return res.status(200).send(result)
}

exports.ProductListBySimilar=async(req,res)=>{
    let result=await ListBySimilarService(req)
    return res.status(200).send(result)

}

exports.ProductDetails=async(req,res)=>{
    let result=await DetailsService(req)
    return res.status(200).send(result)

}

exports.ProductListByKeyword=async(req,res)=>{
    let result=await ListByKeywordService(req)
    return res.status(200).send(result)

}

exports.ProductListByRemarks=async(req,res)=>{
    let result=await ListByRemarkService(req)
    return res.status(200).send(result)

}



exports.ProductReviewList=async(req,res)=>{
    let result=await ReviewListService(req)
    return res.status(200).send(result)

}

exports.CreateReview=async(req,res)=>{
    let result=await CreateReviewService(req)
    return res.status(200).send(result)

}

