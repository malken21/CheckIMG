
// 商品パネル(ListItem) 生成 関数
function CreateListItem(id, price, name, image) {
  const list_base = `
    <article class="item">
      <h3 class="title" id="name_${id}">${name}</h3>
      <h4 class="price">値段: <a id="price_${id}">${price}</a>円</h4>
      <div class="image"><img src=${image} alt="icon" /></div>
      <div class="button">
        <button type="button" onclick="addItem(${id},1);" class=" add">追加</button>
        <span class="count">個数: <a id="count_${id}">0</a></span>
        <button type="button" onclick="addItem(${id},-1);" class="rmv">削除</button>
      </div>
    </article>
    `;

  return list_base;
}

function load_list() {
  console.log("load");

  let list = "";

  for (let loop = 0; loop < 100; loop++) {

    // 画像はbase64でも指定可能

    // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADACAYAAADr7b1mAAAACXBIWXMAAALEAAACxAFbkZ0LAAAJWklEQVR4nO3dz4tWVQDG8Wv4kxF6h3JMFGzcmKFIE6g4ZJAgReCmaGW76D9o2bK/oHa2y5XYRnCR4MYwLGjAJqrZjAmCjYtmAgcbXRjPa2+975k7M++97z3nPa/P9wODv+a953rmnueec++55276rPXikyNbthUAvMw+Xik2q/FPb9vBjx4w9Bw/dMAXAQAYIwAAYwQAYIwAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMEQCAMQIAMEYAAMYIAMAYAQAYIwAAYwQAYIwAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMEQCAMQIAMEYAAMYIAMAYAQAYIwAAYwQAYIwAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMEQCAMQIAMEYAAMYIAMAYAQAY28wPHzEsj7eKu4cOFot7drd/r187tv79d9G6t1DsXFwqJm7fKSbm77T/Dulturxr75PpbTue6aq/9OknjW3r1IWL7YN2LXdfPVgst1rF8vjzxYPxVvu7lvbsLh5t377qE90NYWzxr2Lfr3PF2OJSpf1JXd5G5qeOFrenjvY0+I1ov/b9Mlccvna9dhDkVg+j4MbKQwKgqo0CYNCytO0DM7faDaIfqctbixr87Ok3i/uT+2tvQw3z4I0fioPffV/5s7nUwyhRADAEyIwakL72HZorpq5cjd41bqI8nfV/Pn2q9GyrM+v4vYX2V4fO0guT+9tDg276/OzpU+1/H6Q3UEfqes+FZQAo6dX1q2NsqdrnVJbOLlsfrj6g1FXVwa6xctgY2l3a8VbxxoWLlQ7G1OWp8c+8e6Z0PyZnbvU0/JB6DRouaBvhNhf3vFR5X8LyU9bDqLIMAHXz1uvGpyqr8/dHrl1vH3izb53qOSDVQNS4Tnx9Ocvyyhq/Gs2JS5f7qt92z+DK1fY+33z/bE8PQvuiXoXOxnWkrvdRxW3ATOiAPf3lV6vOmDpABxlXr2XQ8joNtJu2pW1WDVd9v8644YU4BczcyeM1/4f9SV3vuSEAMqKzZ1nXUwdjDIOUpwt+3WdsbWPqyje1r6arAeqMG+7L3PSx0msLTUpd7zkhADLTuRLeLeaBWKc8nZnDs6O66uuN9/uhz4ddfjX+sKcRQ+p6zwUBkKGJ27/37JQaQXixqklVy5s7eaznz+rCN3X7rGzsrsCJ3QsohlDvOSAAMlR2Jl1uPR9tR6uUd7/k9t0rN6rft19P2fZuB3cKYkhd7zkgAFBJ2C1Wo2n6joq2V3ZRDs0jAEZEa8DxdVVrlRc2RN3rjyHc7uIa03qHVQ/PCgIgQ+EFNl2gijkppd/yyhrh7kjzKcq2e/9A3Ntyqes9BwRAhhaCAz32/PR+y7s/+XLPn8faD9PEeYimbNt62Cem1PWeAwIgM7rAFk5+idXNLiqWp+mz3Qa97beRsBcQNtAmpa73XBAAGVH3+uZ7Z3t2SGehWA2tankPgqv/sQOg7vMaVaWu95xYPgugC1l62KSq8Xt/RHuGQOPPH98903OLrWxizDDLexyM/7dEHh+PLfUOAZYqrDHQr9T1nhvLAAifPuuXHh5pMgB0UU3j6qeB1Htw6yBs+om0QcsLP7Mz8iIa4ZN8Td0FSF3vOWM9gMiun/ugUgGDLIpRDKG8XFEP/SEAMqKD78DMT8mWp0pdXq6c68EyADZa1mtYNN1168OVZGeh1OXlyrke6AFEpusGungYerRj+38r4nTGtp0lsXS7SyFVR8zy1E3uHodrmzENctchdb2PKgIgsvXuHOhWk8adeua9+x60rkzrgNRBXFXM8jQttnu2XOyJOYPcdUhd76OKeQBDprOqDrjwoNOBGWNFmibLCycGNS3mXYfU9Z4rAiATGn+WPQcfS53yds8HM/MiN5QwAGJMDEpd77khADJyIJh62lmhNpaq5YUTc5bbq+vG2b+ybZeN6ZuQut5zQgBkRGPT8FaUlq6OpWp5E/Orx9Sx9q9su7Hu3KSu95wQAJnRa6q6VXnFVh1VytO4OdVCHeF2Yz+Zl7rec0EAZCZsYLEPxKrlhQ3x6bTaZq8FaHvhfsSet5G63nNBAGQmPBBjjrOLGuXpEdlwnvxv082u3R9uT+WF4/Smpa73XBAAmSlbCCPm2ahqeWqM4XPyOmM39QKPshdyhMt1x5C63nNBAGQoXAgj9oFYtTw1yLIXeAy6n51XcnVTo0y1MEfqes8BAZCh8H53uBRX06qWp8Z/OJhAo+m03577oHajUXdbnw8f+X094Zt6U9d7DgiADIUvqIi9Im6d8jQmD8flnRCoemdAXf5rH324qsym11/YSOp6zwErAtWgW0YxHx3VBanwwRutiBvrVljd8jqr5nTPnOssrzUxdaf9go/1GvBarwcv/g2Y1E/npa73HLAiUA2akRb72XEddN37qbNkzAOxbnllIdD5vL5UTxpbd3ev9QzBQskbhjp05h/Wo7mp633YeBowU+ELKdRriblO3SDl6fv0eb3EM+wyq5HP93k7TWGhMf8w12pIXe/DxjWATOms033xSw0r5uuxBi1PXfa3Pz/fPntXvWinhq9G9s4X54e+UEvqeh+2TZd37X0yvW3HM/sfxHB0FtzUtZal4GKaxtp6tl9PF+rCm8Py2zm6sfKQIQDi0JnU4c06o44hAGCMAACMjeQQYP6F8eL88dcy2BPgf5N/LhUf35wZqRqhBwAYIwAAYwQAYIwAAIwRAIAxAgAwxlRgwJSmAtMDAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMEQCAMQIAMEYAAMYIAMAYAQAYIwAAYwQAYIwAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMEQCAMQIAMEYAAMYIAMAYAQAYIwAAYwQAYIwAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGBs8+zjFX7+gKHZxyvFPxgevZFSzZsNAAAAAElFTkSuQmCC

    // CreateListItem(固有ID,金額,商品名,画像);
    list += CreateListItem(loop, 50, "商品名2", "img/error.png");
  }

  document.getElementById(`list`).innerHTML = list;
}