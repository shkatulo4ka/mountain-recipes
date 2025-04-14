import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateRecipe() {
    return(
        <div className="m-2">
            <Card>
                <CardHeader>
                    <CardTitle>Create Recipe</CardTitle>
                    <CardDescription>Create your own recipe</CardDescription>
                </CardHeader>
                <CardContent>
                    <form></form>
                </CardContent>
            </Card>
        </div>
    )
}