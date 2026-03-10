// Define the types for the props

type AvatarProps = {
  body: string
  hair: string
  shoes: string
  accessory: string
}

export default function Avatar({
  body,
  hair,
  shoes,
  accessory,
}: AvatarProps) {

  return (

    /*
    relative container
    all images stack using absolute positioning
    */

    <div className="relative w-[300px] h-[500px]">

      {/* BODY */}
      <img
        src={`/assets/body/${body}`}
        className="absolute top-0 left-0 w-full"
        alt="body"
      />

      {/* SHOES */}
      <img
        src={`/assets/shoes/${shoes}`}
        className="absolute top-0 left-0 w-full"
        alt="shoes"
      />

      {/* HAIR */}
      <img
        src={`/assets/hair/${hair}`}
        className="absolute top-0 left-0 w-full"
        alt="hair"
      />

      {/* ACCESSORIES */}
      <img
        src={`/assets/accessories/${accessory}`}
        className="absolute top-0 left-0 w-full"
        alt="accessory"
      />

    </div>
  )
}