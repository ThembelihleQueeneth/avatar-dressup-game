// Define types for props

type ItemGridProps = {
  items: string[]
  folder: string
  onSelect: (item: string) => void
}

export default function ItemGrid({
  items,
  folder,
  onSelect
}: ItemGridProps) {

  return (

    <div className="grid grid-cols-2 gap-4">

      {items.map((item) => (

        <div
          key={item}
          onClick={() => onSelect(item)}
          className="cursor-pointer bg-pink-100 p-2 rounded-lg hover:bg-pink-200 transition cursor-pointer"
        >

          <img
            src={`/assets/${folder}/${item}`}
            className="w-full"
            alt={item}
          />

        </div>

      ))}

    </div>
  )
}