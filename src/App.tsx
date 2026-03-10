import { useState } from "react"
import Avatar from "./components/Avatar"
import ItemGrid from "./components/ItemGrid"

export default function App() {

  /*
  Avatar state
  */

  const [body, setBody] = useState<string>("body1.png")
  const [hair, setHair] = useState<string>("hair1.png")
  const [shoes, setShoes] = useState<string>("shoe1.png")
  const [accessory, setAccessory] = useState<string>("acc1.png")
  const [clothes, setClothes] = useState<string>("clothes1.png")

  /*
  Category state
  */

  const [category, setCategory] = useState<string>("hair")



  /*
  Item arrays
  */

  const hairItems = [
    "hair1.png",
    "hair2.png",
    "hair3.png",
    "hair4.png",
  ]

  const bodyItems = [
    "body1.png",
    "body2.png",
    "body3.png",
    "body4.png",
  ]

  const shoeItems = [
    "shoe1.png",
    "shoe2.png",
    "shoe3.png",
    "shoe4.png",
    "shoe5.png",
  ]

  const accItems = [
    "acc1.png",
    "acc2.png",
    "acc3.png",
    "acc4.png",
    "acc5.png",
    "acc6.png",
    "acc7.png",
  ]

  const clothesItems = [
    "dress1.png",
    "dress2.png",
    "dress3.png",
    "dress4.png",
    
  ]



  /*
  Dynamic grid renderer
  */

  const renderGrid = () => {

    if (category === "hair")
      return (
        <ItemGrid
          items={hairItems}
          folder="hair"
          onSelect={setHair}
        />
      )

    if (category === "body")
      return (
        <ItemGrid
          items={bodyItems}
          folder="body"
          onSelect={setBody}
        />
      )

      if (category === "clothes")
        return(
          <ItemGrid
            items={clothesItems}
            folder="clothes"
            onSelect={() => {}}
          />
        )

    if (category === "shoes")
      return (
        <ItemGrid
          items={shoeItems}
          folder="shoes"
          onSelect={setShoes}
        />
      )

    if (category === "accessories")
      return (
        <ItemGrid
          items={accItems}
          folder="accessories"
          onSelect={setAccessory}
        />
      )
  }



  return (

    <div className="min-h-screen bg-pink-50 flex justify-center items-center gap-12">

      {/* Avatar Preview */}

      <Avatar
        body={body}
        clothes={clothes}
        hair={hair}
        shoes={shoes}
        accessory={accessory}

      />



      {/* Right Panel */}

      <div className="w-[350px] bg-pink-200 rounded-xl p-4">

        {/* Category Buttons */}

        <div className="flex justify-between mb-4">

          <button onClick={() => setCategory("hair")} className="btn cursor-pointer">
            Hair
          </button>
          <button onClick={() => setCategory("clothes")} className="btn cursor-pointer">
            Clothes
          </button>

          <button onClick={() => setCategory("body")} className="btn cursor-pointer">
            Body
          </button>

          <button onClick={() => setCategory("shoes")} className="btn cursor-pointer">
            Shoes
          </button>

          <button onClick={() => setCategory("accessories")} className="btn cursor-pointer">
            Acc
          </button>

        </div>



        {/* Clothing Grid */}

        {renderGrid()}



        {/* Bottom Buttons */}

        <div className="flex justify-between mt-4">

          <button
            onClick={() => {
              setBody("body1.png")
              setHair("hair1.png")
              setShoes("shoe1.png")
              setAccessory("acc1.png")
            }}
            className="bg-gray-400 px-4 py-2 rounded cursor-pointer"
          >
            Reset
          </button>


          <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
            Done
          </button>

        </div>

      </div>

    </div>
  )
}