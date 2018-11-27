$( document ).ready(function() {
    
    var menu_drink = [{name:'샹그리아 에이드',
                  img:'../img/menu/drink/2106_small_img.jpg',
                  price:'6000',
                  desciption:'레드 와인 풍미에 신선한 생과일을 더해 청량하게 즐기는 무알코올 상그리아 에이드'},
                 {name:'레몬 셔벗 에이드',
                  img:'../img/menu/drink/2105_small_img.jpg',
                  price:'6500',
                  desciption:'드라이한 샴페인 향과 생라임, 민트잎이 어우러져 시원하고 청량하게 즐기는 에이드'},
                 {name:'자몽 에이드',
                  img:'../img/menu/drink/1324_small_img.jpg',
                  price:'5500',
                  desciption:'자몽의 상큼함과 청량감이 입안 가득 느껴지는 자몽 에이드'},
                 {name:'오렌지 에이드',
                  img:'../img/menu/drink/1315_small_img.jpg',
                  price:'5500',
                  desciption:'오렌지를 그대로 갈아 넣은 상큼한 오렌지 에이드'},
                 {name:'오렌지 자몽 주스',
                  img:'../img/menu/drink/1059_small_img.jpg',
                  price:'6000',
                  desciption:'통 오렌지와 자몽을 블렌딩한 상큼함이 입안 가득 느껴지는 주스'},
                 {name:'키위 바나나 주스',
                  img:'../img/menu/drink/1058_small_img.jpg',
                  price:'5800',
                  desciption:'그린키위와 바나나가 블렌딩 된 주스'},
                 
                ];
    var menu_esso = [{name:'카페오트라떼',
                  img:'../img/menu/esso/2142_small_img.jpg',
                  price:'5800',
                  desciption:'귀리우유와 에스프레소가 만나 겨울 디저트와 잘 어울리는 고소한 라떼'},
                 {name:'아이스 더블브루',
                  img:'../img/menu/esso/2096_small_img.jpg',
                  price:'4900',
                  desciption:'유러피안 커피의 본질인 에스프레소에 트렌디한 콜드브루를 더한 투썸 시그니처 커피'},
                 {name:'더블브루',
                  img:'../img/menu/esso/2095_small_img.jpg',
                  price:'4900',
                  desciption:'유러피안 커피의 본질인 에스프레소에 트렌디한 콜드브루를 더한 투썸 시그니처 커피'},
                 {name:'오렌지 블라썸 라떼',
                  img:'../img/menu/esso/1956_small_img.jpg',
                  price:'5100',
                  desciption:'구운 오렌지 시럽의 농후하면서도 달콤한 맛과 플로럴한 아로마가 잘 어우러진 라떼'},
                 {name:'투썸 시그니처 라떼',
                  img:'../img/menu/esso/1955_small_img.jpg',
                  price:'5100',
                  desciption:'스페셜 블렌드의 커피 맛을 극대화 시킨 생크림과 우유의 고소함이 잘 어울리는 시그니처 라떼'},
                 {name:'콜드브루 토닉',
                  img:'../img/menu/esso/1907_small_img.jpg',
                  price:'5100',
                  desciption:'콜드브루를 그대로 얼린 큐브얼음과 상큼한 토닉워터가 어우러진 커피'},
                 
                 
                ];
    var menu_blend = [];
    var menu_tea = [];
    
     
    
    $('.tab li').click(function(){
       
        var click_tab_txt = $(this).attr('class');
        $('.tab li').not(this).css({borderColor:'#444'});
        $(this).css({borderColor:'#dd0330'});
        $('.menu_list').empty();
            switch(click_tab_txt){
                    
                case 'coffee_all' : 
                   drink();
                    esso();
                    break;
                    
               case 'menu_drink' : 
                    drink();
                    break;
                    
               case 'menu_esso' : 
                    esso();
                    break;
                    
               case 'menu_blend' : 
                    blend();
                    break;
                    
               case 'menu_tea' : 
                    tea();
                    
                    break;
                    
                    
            }

        
        if($('.menu_wrap').length == 0){
            $('.menu_list').append('<div class="ready_text">아직 준비중이예요</div>');
        }else{
            
            
        }
        
        
        
    });
    $('.tab li').eq(0).trigger('click');
    
    
    
    function drink(){
        
        for(i=0;i<menu_drink.length;i++){
        
        $('.menu_list').append('<div class="menu_wrap"><img src="'+ menu_drink[i].img+'" alt="'+menu_drink[i].desciption +'" /><span class="menu_name">'+ menu_drink[i].name +'</span><span class="price">'+ menu_drink[i].price +'</span></div>');
        }
    
    }
     function esso(){
        
        for(i=0;i<menu_esso.length;i++){
        
        $('.menu_list').append('<div class="menu_wrap"><img src="'+ menu_esso[i].img+'" alt="'+menu_esso[i].desciption +'" /><span class="menu_name">'+ menu_esso[i].name +'</span><span class="price">'+ menu_esso[i].price +'</span></div>');
        }
    
    }
     function blend(){
        
        for(i=0;i<menu_blend.length;i++){
        
        $('.menu_list').append('<div class="menu_wrap"><img src="'+ menu_blend[i].img+'" alt="'+menu_blend[i].desciption +'" /><span class="menu_name">'+ menu_blend[i].name +'</span><span class="price">'+ menu_blend[i].price +'</span></div>');
        }
    
    }
     function tea(){
        
        for(i=0;i<menu_tea.length;i++){
        
        $('.menu_list').append('<div class="menu_wrap"><img src="'+ menu_tea[i].img+'" alt="'+menu_tea[i].desciption +'" /><span class="menu_name">'+ menu_tea[i].name +'</span><span class="price">'+ menu_tea[i].price +'</span></div>');
        }
    
    }
    
});

//menu_tab_js

var sum_tab_w =0;
for(tab_index=0;tab_index<$('.tab li').length;tab_index++){
    var tab_w = $('.tab li').eq(tab_index).outerWidth();
    var sum_tab_w = sum_tab_w + parseInt(tab_w) ;
   
}
$('.tab').css({width:sum_tab_w+3});

$('.tab_ul').hide();
$('.select_menu').click(function(){
$('.tab_ul').slideToggle();
    
});

$('.tab_ul li').click(function(){
   
    var click_tab_text = $(this).text();
    $('.select_menu').text(click_tab_text);
    $('.tab_ul').hide();
});
