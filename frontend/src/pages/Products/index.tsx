import { ChangeEvent, useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

import Input from "../../components/Input";
import ProductItemGrid from "../../components/ProductItemGrid";
import ProductItemList from "../../components/ProductItemList";

type Filters = {
  ascending: boolean;
  descending: boolean;
  alphabetical: boolean;
};

type Product = {
  id: string;
  name: string;
  rating: number;
  price: number;
  photo: string;
};

export default function Products() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [display, setDisplay] = useState<"List" | "Grid">("List");
  const [filters, setFilters] = useState<Filters>({
    ascending: false,
    descending: false,
    alphabetical: false
  });
  const [label, setLabel] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  function handleFilter(ev: ChangeEvent<HTMLInputElement>, prop: string) {
    setFilters({ ...filters, [prop]: ev.target.checked });
    if (prop === "ascending") {
      setProducts(products => products.sort((a, b) => +a.price - +b.price));
    } else if (prop === "descending") {
      setProducts(products =>
        products.sort((a, b) => +a.price - +b.price).reverse()
      );
    } else {
      setProducts(products =>
        products.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
      );
    }
  }

  function handleChangeCategory(
    ev: ChangeEvent<HTMLInputElement>,
    value: string
  ) {
    if (ev.target.checked) {
      setLabel(value);
    }
  }

  function handleClearFilters() {
    setFilters({ ascending: false, descending: false, alphabetical: false });
    setLabel("");
    setSearchValue("");
  }

  useEffect(() => {
    const endpoint =
      label !== ""
        ? `/products?label=${label}&query=${searchValue}`
        : `/products?query=${searchValue}`;
    api.get(endpoint).then(response => setProducts(response.data));
  }, [label, searchValue]);

  return (
    <div id="products-page">
      <aside className="products-sidebar">
        <Input
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16.003"
              viewBox="0 0 16 16.003"
            >
              <path d="M15.782,13.835,12.667,10.72a.749.749,0,0,0-.531-.219h-.509A6.5,6.5,0,1,0,10.5,11.626v.509a.749.749,0,0,0,.219.531l3.116,3.116a.747.747,0,0,0,1.059,0l.884-.884a.754.754,0,0,0,0-1.063ZM6.5,10.5a4,4,0,1,1,4-4A4,4,0,0,1,6.5,10.5Z" />
            </svg>
          }
          placeholder="Procurar..."
          value={searchValue}
          onChange={ev => setSearchValue(ev.target.value)}
        />
        <div className="options-items">
          <div
            className={
              display === "List" ? "option-item active" : "option-item"
            }
            onClick={() => setDisplay("List")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19.5"
              viewBox="0 0 24 19.5"
            >
              <path
                d="M3.75,18.375h-3a.75.75,0,0,0-.75.75v3a.75.75,0,0,0,.75.75h3a.75.75,0,0,0,.75-.75v-3A.75.75,0,0,0,3.75,18.375Zm0-15h-3a.75.75,0,0,0-.75.75v3a.75.75,0,0,0,.75.75h3a.75.75,0,0,0,.75-.75v-3A.75.75,0,0,0,3.75,3.375Zm0,7.5h-3a.75.75,0,0,0-.75.75v3a.75.75,0,0,0,.75.75h3a.75.75,0,0,0,.75-.75v-3A.75.75,0,0,0,3.75,10.875Zm19.5,8.25h-15a.75.75,0,0,0-.75.75v1.5a.75.75,0,0,0,.75.75h15a.75.75,0,0,0,.75-.75v-1.5A.75.75,0,0,0,23.25,19.125Zm0-15h-15a.75.75,0,0,0-.75.75v1.5a.75.75,0,0,0,.75.75h15a.75.75,0,0,0,.75-.75v-1.5A.75.75,0,0,0,23.25,4.125Zm0,7.5h-15a.75.75,0,0,0-.75.75v1.5a.75.75,0,0,0,.75.75h15a.75.75,0,0,0,.75-.75v-1.5A.75.75,0,0,0,23.25,11.625Z"
                transform="translate(0 -3.375)"
              />
            </svg>
            <span>Lista</span>
          </div>
          <div
            className={
              display === "Grid" ? "option-item active" : "option-item"
            }
            onClick={() => setDisplay("Grid")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.5"
              height="22.5"
              viewBox="0 0 22.5 22.5"
            >
              <g transform="translate(-3 -3)">
                <path
                  d="M4.5,4.5h7.583v7.583H4.5Z"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  d="M21,4.5h7.583v7.583H21Z"
                  transform="translate(-4.583)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  d="M21,21h7.583v7.583H21Z"
                  transform="translate(-4.583 -4.583)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  d="M4.5,21h7.583v7.583H4.5Z"
                  transform="translate(0 -4.583)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </g>
            </svg>
            <span>Grade</span>
          </div>
        </div>
        <div className="filters-wrapper">
          <div className="filters">
            <span className="filter-title">Filtros</span>
            <div className="filter-item">
              <span>Preço em ordem crescente</span>
              <input
                checked={filters.ascending}
                onChange={ev => handleFilter(ev, "ascending")}
                type="checkbox"
              />
            </div>
            <div className="filter-item">
              <span>Preço em ordem decrescente</span>
              <input
                checked={filters.descending}
                onChange={ev => handleFilter(ev, "descending")}
                type="checkbox"
              />
            </div>
            <div className="filter-item">
              <span>Ordem alfabética (A-Z)</span>
              <input
                checked={filters.alphabetical}
                onChange={ev => handleFilter(ev, "alphabetical")}
                type="checkbox"
              />
            </div>
          </div>
          <div className="categories">
            <span className="category-title">Categorias</span>
            <div className="category-item">
              <span>Roupas</span>
              <input
                onChange={ev => handleChangeCategory(ev, "Roupas")}
                type="checkbox"
              />
            </div>
            <div className="category-item">
              <span>Ferramentas</span>
              <input
                onChange={ev => handleChangeCategory(ev, "Ferramentas")}
                type="checkbox"
              />
            </div>
            <div className="category-item">
              <span>Eletrodomésticos</span>
              <input
                onChange={ev => handleChangeCategory(ev, "Eletrodomésticos")}
                type="checkbox"
              />
            </div>
            <div className="category-item">
              <span>Cozinha</span>
              <input
                onChange={ev => handleChangeCategory(ev, "Cozinha")}
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </aside>
      <main className="products-items-wrapper">
        <span className="products-items-title">Produtos</span>
        <hr />
        {display === "List" ? (
          <div className="products-items-list">
            {products.map(product => (
              <ProductItemList key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="products-items-grid">
            {products.map(product => (
              <ProductItemGrid key={product.id} product={product} />
            ))}
          </div>
        )}
        <span className="products-items-end">
          Você chegou no fim da lista! Se quiser,{" "}
          <span className="action" onClick={handleClearFilters}>
            procure sem filtros
          </span>
          .
        </span>
      </main>
    </div>
  );
}
