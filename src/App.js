import React from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SortSelect from "./components/UI/select/SortSelect";
import TextInput from "./components/UI/textInput/TextInput";
import PostsFilter from "./components/PostsFilter";

const text = "В Европе Средневековье было временем господства церковных догматов, в отношении к психическим заболеваниям преобладали суеверия и религиозные представления. При этом отсутствовал научный подход к психически больным, психические заболевания медицина не относила к области своей компетенции. По мнению некоторых учёных, в ходе знаменитых процессов ведьм гонениям и расправам, вплоть до сожжения на костре, подвергались в том числе и лица с психическими расстройствами, которых нередко воспринимали как одержимых демонами, считали колдунами и ведьмами. Вместе с тем, как нередко утверждается, именно в средневековой западной Европе возникли первые психиатрические больницы[35], хотя есть мнение, что они возникли ещё раньше на Ближнем Востоке, в Багдаде в VIII веке[36] и в Византии. В Западной Европе подобные заведения не имели цели излечить больных, а имели целью изолировать их от общества. Условия были сходны с тюремными: широко применялись цепи, наручники, часто не соблюдалась простейшая гигиена. Ярким примером тому служит открытый в конце XV века Бедлам. Тем не менее существовали также пансионы при монастырях и церковные больницы, где условия пребывания были сравнительно лучше, но поступать в такие учреждения могли, как правило, лишь представители привилегированных слоёв общества. На Руси в Средневековье не было учреждений, подобных Бедламу, и призрением душевнобольных занимались монастыри, как, впрочем, и призрением страдающих другими болезнями и нищих. Кроме того, в православии существовало представление о юродивых, что часто означало более мягкое отношение, чем в Западной Европе. Однако отмечались и случаи сожжения людей с психическими расстройствами[37]."
const wordsArray = text.split(' ');
console.info(wordsArray);

const initialPosts = []
for (let postIndex = 0; postIndex < Math.random() * 10; postIndex++)
{
  let iPost = { id: postIndex + 1, title: '', body: '' };

  for (var key in iPost)
  {
    if (iPost[key] === '')
    {
      var tArr = []
      for (let wi = 0; wi < (Math.random() * wordsArray.length); wi++)
      {
        tArr.push(wordsArray[Math.floor(Math.random() * wordsArray.length)]);
      }
      iPost[key] = tArr.join(' ');
    }
  }
  initialPosts.push(iPost);
}

function App()
{
  const [posts, setPosts] = React.useState(initialPosts);

  // const [sortField, setSortField] = React.useState('');
  // const [searchQuery, setSearchQuery] = React.useState('');
  const [filter, setFilter] = React.useState({ query: '', sort: '' })

  function addPost(newPost)
  {
    setPosts([...posts, newPost]);
  }

  function removePost(id)
  {
    setPosts(posts.filter(p => p.id !== id))
  }

  const sortedPosts = React.useMemo(() =>
  {
    if (filter.sort)
    {
      return [...posts].sort(
        (a, b) =>
        {
          return (typeof (a[filter.sort]) == "string") ? a[filter.sort].localeCompare(b[filter.sort]) : a[filter.sort] - b[filter.sort]
        }
      )
    }
    else
    {
      return posts;
    }
  }, [filter.sort, posts])

  const searchedAndSortedPosts = React.useMemo(function ()
  {
    return sortedPosts.filter((post) => 
    {
      let postText = '';
      for (let key in post)
      {
        if (typeof (post[key]) == "string") postText += post[key].toLocaleLowerCase();
      }

      return postText.includes(filter.query.toLowerCase());
    });
  }, [filter.query, sortedPosts])

  function onSearchChange(value)
  {
    setSearchQuery(value);
    console.info(searchQuery)
  }

  return (
    <div className="App">
      <PostForm addPost={addPost} />
      <hr style={{ margin: "15px 0px" }} />
      <PostsFilter filter={filter} setFilter={setFilter} />

      {
        searchedAndSortedPosts.length ?
          <PostList posts={searchedAndSortedPosts} removePost={removePost} listTitle="Список списков" />
          :
          <div >Хуюшки, сказал заинька</div>
      }

    </div>
  );
}

export default App;
