import Image from "next/image"
import Link from "next/link"

interface IRecipeCardProps {
    data: {
        id: string,
        createdAt: Date,
        name: string,
        description: string | null,
        kkal: number | null,
        ingredients: {
            ingredient: {
                id: string
                name: string
            }
            quantity: number | null
        }[]
    }
}

const RecipeCard = ({data}: IRecipeCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border-gray-200 
    bg-white shadow-md transition-all hover: shadow-lg">
        <Link href={`/post/${data.id}`} className="block w-full h-full">
            <h1 className="text-2xl text-gray-900 items-center font-semibold m-4">{data.name}</h1>

            <p className="text-md font-md text-gray-600 line-clamp-2 m-4">{data.description}</p>
        
            <div className="flex items-center justify-between m-4">
                {/* <div className="flex items-center space-x-2">
                    <div className="relative size-8 overflow-hidden rounded-md">
                        <Image
                            src={}
                            alt={}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <p className="text-sm text-gray-700">
                    {authorName}
                </p> */}
                <time className="text-xs text-gray-500">
                    {new Intl.DateTimeFormat('ru-Ru', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    }).format(data.createdAt)
                }
                </time>
            </div> 
            
           
        </Link>
    </div>
  )
}

export default RecipeCard