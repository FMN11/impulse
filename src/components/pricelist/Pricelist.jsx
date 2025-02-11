import { PricelistContainer } from "./PricelistStyle";
import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

const data = [
  {
    format: "20x25",
    photo: "18,00 М",
    poster: "9,00 КГ",
    canvas: "65,00 СМ",
  },
  {
    format: "21x30",
    photo: "14,00 АА",
    poster: "11,00 ИМ",
    canvas: "75,00 АУ",
  },
  {
    format: "25x30",
    photo: "18,00 ИИ",
    poster: "13,00 ЫЫ",
    canvas: "75,00 Ало",
  },
  {
    format: "25x38",
    photo: "20,00 ии",
    poster: "13,00 куку",
    canvas: "85,00 Ало",
  },
  {
    format: "30x40",
    photo: "27,00 ММ",
    poster: "15,00 СС",
    canvas: "105,00 Гроши",
  },
  {
    format: "30x45",
    photo: "38,00 Ик",
    poster: "20,00 Аче",
    canvas: "125,00 ХЗ",
  },
  {
    format: "40x50",
    photo: "40,00 Уч",
    poster: "25,00 МЛРД",
    canvas: "135,00 ХЗ",
  },
];

const Pricelist = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "Формат", //access nested data with dot notation
        header: "Формат (w cm)",
      },
      {
        accessorKey: "photo",
        header: "Фото (240g)",
      },
      {
        accessorKey: "poster", //normal accessorKey
        header: "Плакат (120g)",
      },
      {
        accessorKey: "canvas",
        header: "Полотно",
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <div id="pricelist" data-aos="fade-left">
      <PricelistContainer>
        <h1>Прайслист</h1>
        <MantineReactTable table={table} />
      </PricelistContainer>
    </div>
  );
};

export default Pricelist;
