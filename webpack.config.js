const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development' 

if(process.env.NODE_ENV=='test'){
    require('dotenv').config({path:'.env.test'})
}
else if(process.env.NODE_ENV=='development'){
    require('dotenv').config({path:'.env.development'})
}
module.exports = (env)=>{
   return { 
    entry: "./src/app.js",
    output:{
        path:path.join(__dirname,"public/dist/"),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude:/node_modules/,
            use:{
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                  }

            }
        },
        {
            test:/\.s?css$/,
            use:[MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader',
                    options:{
                        sourceMap:true
                    }
                },
                {
                    loader:'sass-loader',
                    options:{
                        sourceMap:true
                    }
                }
            ],
        }
    ]
    },
    plugins:[new MiniCssExtractPlugin(),new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGE_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGE_SENDER_ID),
        'process.env.FIREBASE_APP_ID':JSON.stringify(process.env.FIREBASE_APP_ID),
        'process.env.FIREBASE_MEASUREMENT_ID':JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
    
        
        
            
    })],
    devtool:env==='production'?"source-map":"inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback:true,
        publicPath:'/dist/'       
      }

    }
    

}
