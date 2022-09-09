# Grid system
+ Css chung cho các thiết kế  dạng cột hàng.
+ Col: css chung cho 1 cột, hai cột, ...
+ Row: css chung cho hàng.
+ Nguyên tắt bên tạo một hàng bên trong phải có col.
```
<div class="row">
	<div class="col col_half">
	...
	</div>
	<div class="col col_half">
		<form action="">
			<div class="row mt_8">
				<div class="col col_half ">
				...
				</div>
				<div class="col col_half">
				...
				</div>
			</div>
			
			<div class="row mt_8">
				<div class="col ">
				...
				</div>
			</div>

			<button class="btn mt_16 pull_right">
				SEND
			</button>

		</form>
	</div>
</div>
```
